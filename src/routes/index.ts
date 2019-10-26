import {NextFunction, Request, Response, Router} from "express";
import * as http from "http";
import {BaseRoute} from "./route";

/**
 * / route
 *
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        // log
        // console.log("[IndexRoute::create] Creating index route.");

        // add home page route
        router.get("/", async (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });

        router.get("/user/:userID", async (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().login(req, res, next);
        });
    }

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
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @param next
     * @next {NextFunction} Execute the next method.
     */
    public async index(req: Request, res: Response, next: NextFunction) {
        // set custom title
        this.title = "Budget App | Welcome!";

        const userData = await this.requestAllUsers(req, res, next);
        const userIDs = [];
        for (const user of userData) {
            userIDs.push(user.userID);
        }

        // set options
        const options: object = {
            instructions: "Select your user ID to view your purchases",
            users: userIDs,
        };

        // render template
        this.render(req, res, "index", options);
    }

    private async requestAllUsers(req: Request, res: Response, next: NextFunction) {
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get("http://localhost:3000/users", async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });
            });
        });

        const userIDs = [];
        for (const user of (apiResponse as any).users) {
            userIDs.push(user);
        }
        return userIDs;
    }

    private async requestUser(userID: string, req: Request, res: Response, next: NextFunction) {
        const address = "http://localhost:3000/users/" + userID;
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });
            });
        });
        return (apiResponse as any).user;
    }

    private async requestPurchases(userID: string, req: Request, res: Response, next: NextFunction) {
        const address = "http://localhost:3000/purchases/" + userID;

        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });
            });
        });

        const userPurchases = [];
        for (const purchase of (apiResponse as any).purchases) {
            userPurchases.push(purchase);
        }
        return userPurchases;
    }

    private async login(req: Request, res: Response, next: NextFunction) {
        const userID = req.params.userID;
        const userData = await this.requestUser(userID, req, res, next);

        if (typeof userData === "undefined") {
            res.status(404).send("Sorry user doesn't exist!");
        } else if (userData.admin) {
            this.admin(req, res, next);
        } else {
            this.purchases(req, res, next);
        }
    }

    private async purchases(req: Request, res: Response, next: NextFunction) {
        this.title = "My Purchases";

        const userID = req.params.userID;
        const purchases = await this.requestPurchases(userID, req, res, next);

        const categories = purchases.map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        purchases.sort((a, b) => (a.date > b.date) ? -1 : 1);

        const options: object = {
            categories,
            purchases,
            user: userID,
        };
        this.render(req, res, "purchases", options);
    }

    private async admin(req: Request, res: Response, next: NextFunction) {
        this.title = "Administrator Access";
        const userID = req.params.userID;

        const allUsers = await this.requestAllUsers(req, res, next);

        const options: object = {
            allUsers,
            user: userID,
        };
        this.render(req, res, "admin", options);
    }
}
