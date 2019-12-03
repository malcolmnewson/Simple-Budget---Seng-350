import {Request, Response, Router} from "express";
import {PurchaseDao} from "../daos/purchaseDao";
import {LoginController} from "./loginController"

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

        // add updateRequest route
        router.post("/purchases/updateRequest", async (req: Request, res: Response) => {
            req.params.userID = req.body.userID;
            await new LoginController().login(req, res);
        });

        // add updateSubmission route
        router.post("/purchases/updateSubmission", async (req: Request, res: Response) => {
            await new PurchaseRouter().updateUserPurchase(req, res);
        });

        // add deletePurchase route
        router.post("/purchases/delete", async (req: Request, res: Response) => {
            await new PurchaseRouter().deletePurchase(req, res);
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
        const userID = req.params.userID;

        let purchases = await this.purchaseDao.getUsersPurchases(userID);

        if (purchases) {
            res.status(200);
            res.send({
                    message: "Success",
                    purchases,
                    status: res.status,
                });
        } else {
            console.log("Router: error getting a users purchases");
            res.status(404);
            res.send({
                    message: "No purchases found related to the userID"
                });
        }
    }

    /**
     * Upload purchase route
     *
     * @class PurchaseRouter
     * @method uploadUsersPurchase
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */

    public async uploadUserPurchase(req:Request, res: Response) {
        let result = await this.purchaseDao.uploadUsersPurchase(req.body);
        if (result == null) {
            console.log("Router: error uploading a users purchases");
        }
        return res.redirect("/user/" + req.body.userID);
    }

    /**
     * Update purchase route
     *
     * @class PurchaseRouter
     * @method updateUsersPurchase
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    public async updateUserPurchase(req:Request, res: Response) {
        let result = await this.purchaseDao.updateUsersPurchase(req.body);
        if (result == null) {
            console.log("Router: error deleting a users purchases");
        }
        return res.redirect("/user/"+req.body.userID);
    }
    /**
     * Delete purchase Dao
     *
     * @class PurchaseDao
     * @method deletePurchase
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    public async deletePurchase(req:Request, res: Response) {
        let result = await this.purchaseDao.deletePurchase(req.body._id);
        if (result == null) {
            console.log("Router: error updating a users purchases");
        }
        return res.redirect("/user/"+req.body.userID);
    }
}
