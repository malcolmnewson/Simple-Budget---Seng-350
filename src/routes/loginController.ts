import {NextFunction, Request, Response} from "express";
import {BaseRoute} from "./route";
import {IndexRoute} from "./index";
import {RequestData} from "./requestData";

export class LoginController extends BaseRoute {

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Determine user type and login
     *
     * @class LoginController
     * @method login
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @param next
     * @next {NextFunction} Execute the next method.
     */
    public async login(req: Request, res: Response, next: NextFunction) {
        const userID = req.params.userID;
        const userData = await new RequestData().requestUser(userID, res);

        if (typeof userData === "undefined") {
            res.status(404).send("Sorry user doesn't exist!");
        } else if (userData.admin) {
            this.admin(req, res, next);
        } else {
            this.purchasePage(req, res, next);
        }
    }

    /**
     * Render admin page.
     *
     * @class LoginController
     * @method admin
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @param next
     * @next {NextFunction} Execute the next method.
     */
    private async admin(req: Request, res: Response, next: NextFunction) {
        this.title = "Administrator Access";
        const userID = req.params.userID;

        const allUsers = await new RequestData().requestAllUsers(res);

        const options: object = {
            allUsers,
            user: userID,
        };
        this.render(req, res, "admin", options);
    }


    /**
     * Render user's purchases page
     *
     * @class LoginController
     * @method purchasePage
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @param next
     * @next {NextFunction} Execute the next method.
     */
    private async purchasePage(req: Request, res: Response, next: NextFunction) {
        this.title = "My Purchases";

        const userID = req.params.userID;
        const purchases = await new RequestData().requestPurchases(userID, res);

        const categories = purchases.map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        purchases.sort((a, b) => (a.date > b.date) ? -1 : 1);

        const options: object = {
            categories,
            purchases,
            user: userID,
        };
        this.render(req, res, "purchasePage", options);
    }

}