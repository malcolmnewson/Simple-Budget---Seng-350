import {NextFunction, Request, Response, Router} from "express";
import {PurchaseDao} from "../daos/purchaseDao";

export class PurchaseRouter {

    public static create(router: Router) {
        // log
        // console.log("[PurchaseRoute::create] Creating PurchaseRoute routes.");

        // add getUserPurchases route
        router.get("/purchases/:userID", async (req: Request, res: Response, next: NextFunction) => {
            await new PurchaseRouter().getUserPurchases(req, res, next);
        });
    }

    // used to access purchase collection from database
    private purchaseDao: PurchaseDao;

    constructor() {
        this.purchaseDao = new PurchaseDao();
    }

    /*
     * GET all purchases for one user.
     */
    public async getUserPurchases(req: Request, res: Response, next: NextFunction) {
        let purchases;
        const userID = req.params.userID;

        try {
            purchases = await this.purchaseDao.getUsersPurchases(userID);
        } catch {
            // console.log("Router: error getting a users purchases");
        }

        if (purchases) {
            res.status(200)
                .send({
                    message: "Success",
                    purchases,
                    status: res.status,
                });
        } else {
            res.status(404)
                .send({
                    message: "No purchases found related to the userID",
                    status: res.status,
                });
        }
    }
}
