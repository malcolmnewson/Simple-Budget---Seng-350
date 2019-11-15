import {NextFunction, Request, Response, Router} from "express";
import {PurchaseDao} from "../daos/purchaseDao";

export class PurchaseRouter {

    public static create(router: Router) {
        // log
        // console.log("[PurchaseRoute::create] Creating PurchaseRoute routes.");

        // add getUserPurchases route
        router.get("/purchases/:userID", async (req: Request, res: Response, next: NextFunction) => {
            console.log("Successful userID");
            await new PurchaseRouter().getUserPurchases(req, res, next);
        });

        // add uploadUserPurchase route
        router.post("/purchases/upload/banana", async (req: Request, res: Response) => {
            console.log("Successful upload");
            await new PurchaseRouter().uploadUserPurchase(req, res);
        });
        router.post("/users/delete/:userID", async (req: Request, res: Response) => {
            console.log("DELETING A USER");

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


    /** ??????????
     * Upload purchase Dao
     *
     * @class PurchaseDao
     * @method uploadUsersPurchase
     * @param req {Request} The express Request object.?
     * @param res {Response} The express Response object.?
     * @param next ?
     * @next {NextFunction} Execute the next method.?
     */
    public async uploadUserPurchase(req:Request, res: Response){
        let result;
        try {
            console.log("in upload users purchases router method");
            result = await this.purchaseDao.uploadUsersPurchase();
            console.log(result);
        } catch {
            //error message?
        }
        res.status(200)
            .send({
                message: "Success",
                status: res.status,
            });
        //maybe add error codes?

    }


}
