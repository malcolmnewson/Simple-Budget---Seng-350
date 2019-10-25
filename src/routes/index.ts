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
            new IndexRoute().purchases(req, res, next);
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


    private async requestUsers(req: Request, res: Response, next: NextFunction) {
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get("http://localhost:3000/users", async (res) => {
                res.on("data", chunk => {
                    data += chunk;
                });
                await res.on("end", () => {
                    //console.log("***data: "+ data);
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                })
            });
        });

        const userIDs = [];
        for (let user of (apiResponse as any).users) {
            userIDs.push(user.userID);
        }
        return userIDs;
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
     * @next {NextFunction} Execute the next method.
     */
    public async index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "Budget App | Welcome!";

        let userIDs = await this.requestUsers(req, res, next);

        //set options
        let options: Object = {
            "instructions": "Select your user ID to view your purchases",
            "users": userIDs
        };

        //render template
        this.render(req, res, "index", options);


    }

    private async purchases(req: Request, res: Response, next: NextFunction) {
        this.title = "My Purchases";

        let userID = req.params.userID;
        let purchases = await this.requestPurchases(userID, req, res, next);

        let options: Object = {
            user: userID,
            purchases: purchases
        };

        this.render(req, res, "purchases", options)

    }
}