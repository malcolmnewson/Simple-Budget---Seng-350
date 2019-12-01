import {Request, Response} from "express";
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
     * @param res {Response} The express Response object
     * @next {NextFunction} Execute the next method
     */
    public async login(req: Request, res: Response) {
        const userID = req.params.userID;
        const userData = await new RequestData().requestUser(userID, res);

        if (typeof userData === "undefined") {
            res.status(404).send("Sorry user doesn't exist!");
        } else if (userData.admin) {
            this.admin(req, res);
        } else {
            this.purchasePage(req, res);
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
    private async admin(req: Request, res: Response) {
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
     */
    private async purchasePage(req: Request, res: Response) {
        this.title = "My Purchases";
        let userID = req.params.userID;
        const categoryList = ['Clothing','Food','School','Transport','Other']

        // Check if req.body is not empty.
        // If so, then req.body has data for update form
        let updateData = 0;
        if(!(req.body.constructor === Object && Object.keys(req.body).length === 0)) {
            updateData = req.body;
            userID = req.body.userID;
        }

        //Retrieve purchases
        const purchases = await new RequestData().requestPurchases(userID, res);

        const categories = purchases.map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        purchases.sort((a, b) => (a.date > b.date) ? -1 : 1);

        const options: object = {
            updateData,
            categoryList,
            categories,
            purchases,
            user: userID,
        };
        this.render(req, res, "purchases", options);
    }

}