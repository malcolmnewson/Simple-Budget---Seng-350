import {NextFunction, Request, Response, Router} from "express";
import {PurchaseDao} from "../daos/purchaseDao";
import {LoginController} from "./loginController"
import {BaseRoute} from "./route";

export class PurchaseRouter {

    public static create(router: Router) {
        // log
        console.log("[PurchaseRoute::create] Creating PurchaseRoute routes.");

        // add getUserPurchases route
        router.get("/purchases/:userID", async (req: Request, res: Response) => {
            await new PurchaseRouter().getUserPurchases(req, res);
        });

        // add uploadUserPurchase route
        router.post("/purchases/upload", async (req: Request, res: Response) => {
            await new PurchaseRouter().uploadUserPurchase(req, res);
        });

        // add updateStepOne route
        router.post("/purchases/updateStepOne", async (req: Request, res: Response,next: NextFunction) => {
            req.params.userID = req.body.userID;
            await new LoginController().login(req, res, next);
        });

        // add updateUserPurchase route
        router.post("/purchases/update", async (req: Request, res: Response) => {
            await new PurchaseRouter().updateUserPurchase(req, res);
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
                    //status: res.status,
                });
        }
    }


    /**
     * Upload purchase Dao
     *
     * @class PurchaseDao
     * @method uploadUsersPurchase
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    public async uploadUserPurchase(req:Request, res: Response){
        let result;
        try {
            result = await this.purchaseDao.uploadUsersPurchase(req.body);
        } catch {
            //error message?
        }
        return res.redirect('back');
    }
    /**
     * Update purchase Dao
     *
     * @class PurchaseDao
     * @method updateUsersPurchase
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    public async updateUserPurchase(req:Request, res: Response){
        let result;
        try {
            result = await this.purchaseDao.updateUsersPurchase(req.body);
        } catch {
            //error message?
        }
        return res.redirect("/user/"+req.body.userID);
    }
}
