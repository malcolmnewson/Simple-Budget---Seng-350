import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import * as http from "http";


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
        //log
        console.log("[IndexRoute::create] Creating index route.");


        //add home page route
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


    private async requestAllUsers(req: Request, res: Response, next: NextFunction) {
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get("http://localhost:3000/users", async (res) => {
                res.on("data", chunk => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                })
            });
        });

        const userIDs = [];
        for (let user of (apiResponse as any).users) {
            userIDs.push(user);
        }
        return userIDs;
    }

    private async requestUser(userID: String, req: Request, res: Response, next: NextFunction) {
        let address = "http://localhost:3000/users/" + userID;
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", chunk => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                })
            });
        });
        return (apiResponse as any).user;
    }

    private async requestPurchases(userID: String, req: Request, res: Response, next: NextFunction) {
        let address = "http://localhost:3000/purchases/" + userID;

        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", chunk => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                })
            });
        });

        const userPurchases = [];
        for (let purchase of (apiResponse as any).purchases) {
            userPurchases.push(purchase);
        }
        return userPurchases;
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
        //set custom title
        this.title = "Budget App | Welcome!";

        let userData = await this.requestAllUsers(req, res, next);
        let userIDs = [];
        for (let user of userData) {
            userIDs.push(user.userID);
        }

        //set options
        let options: Object = {
            "instructions": "Select your user ID to view your purchases",
            "users": userIDs
        };

        //render template
        this.render(req, res, "index", options);
    }

    private async login(req: Request, res: Response, next: NextFunction) {
        let userID = req.params.userID;
        let userData = await this.requestUser(userID, req, res, next);

        if (typeof userData === 'undefined') {
            console.log("NOT A USER");
            res.status(404).send("Sorry user doesn't exist!");
        } else if (userData.admin) {
            console.log("THIS IS ADMIN");
            this.admin(req, res, next);
        } else {
            console.log("REGULAR USER");
            this.purchases(req, res, next);
        }
    }

    private async purchases(req: Request, res: Response, next: NextFunction) {
        this.title = "My Purchases";

        let userID = req.params.userID;
        let purchases = await this.requestPurchases(userID, req, res, next);

        let categories = purchases.map(item => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        purchases.sort((a, b) => (a.date > b.date) ? -1 : 1);

        let options: Object = {
            user: userID,
            categories: categories,
            purchases: purchases
        };
        this.render(req, res, "purchases", options)
    }

    private async admin(req: Request, res: Response, next: NextFunction) {
        this.title = "Administrator Access";
        let userID = req.params.userID;

        let allUsers = await this.requestAllUsers(req, res, next);

        let options: Object = {
            user: userID,
            allUsers: allUsers
        };
        this.render(req, res, "admin", options)
    }
}