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
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });

        //add purchases page
        router.get("/purchases", ((req, res, next) => {
            new IndexRoute().purchases(req, res, next);
        }))
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
     * @next {NextFunction} Execute the next method.
     */
    public async index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "Budget App | Welcome!";

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
            userIDs.push(user.userID);
        }

        //set message
        let options: Object = {
            "message": "Welcome to UVic Seng 350!",
            "instructions": "Select your user ID to view your purchases",
            "users": userIDs
        };

        console.log(options);

        //render template
        this.render(req, res, "index", options);

        //this.render(req, res, "purchases");




    }

    private purchases(req: Request, res: Response, next: NextFunction) {
        this.title = "My Purchases";


        var purchase1 = JSON.parse('{"_id":{"$oid":"5dae12e41c9d440000987caa"},"userID":"malcolmnewson","category":"Food","cost":{"$numberDouble":"20.98"},"date":{"$date":{"$numberLong":"1546344000000"}},"description":"Snack"}');
        var purchase2 = JSON.parse('{"_id":{"$oid":"5dae15c21c9d440000987cac"},"userID":"malcolmnewson","category":"Food","cost":{"$numberDouble":"12"},"date":{"$date":{"$numberLong":"1546344000000"}},"description":"dinner"}');

        var purchases = {purchase1, purchase2};

        let options: Object = {
            purchases: purchases

        };

        this.render(req, res, "purchases", options)

    }
}