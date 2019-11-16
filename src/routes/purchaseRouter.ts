import {NextFunction, Request, Response, Router} from "express";
import {PurchaseDao} from "../daos/purchaseDao";

export class PurchaseRouter {

    public static create(router: Router) {
        // log
        console.log("[PurchaseRoute::create] Creating PurchaseRoute routes.");

        // add getUserPurchases route
        router.get("/purchases/:userID", async (req: Request, res: Response) => {
            await new PurchaseRouter().getUserPurchases(req, res);
        });
    }

    // used to access purchase collection from database
    private purchaseDao: PurchaseDao;

    constructor() {
        this.purchaseDao = new PurchaseDao();
    }

    /**
     * Routing method for getting a user's purchases.
     *
     * @class purchaseRouter
     * @method getUserPurchases
     * @param req {Request} The request object.
     * @param res {Result} The result object.
     */
    public async getUserPurchases(req: Request, res: Response) {
        let purchases;
        const userID = req.params.userID;

        try {
            purchases = await this.purchaseDao.getUsersPurchases(userID);
        } catch {
            console.log("Router: error getting a users purchases");
        }

        if (purchases) {
            res.status(200);
            res.send({
                    message: "Success",
                    purchases,
                    status: res.status,
                });
        } else {
            res.status(404);
            res.send({
                    message: "No purchases found related to the userID",
                    status: res.status,
                });
        }
    }
}
