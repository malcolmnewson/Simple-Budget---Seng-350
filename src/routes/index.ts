import express, {NextFunction, Request, Response, Router} from "express";
import { BaseRoute } from "./route";
import {UserDao} from "../daos/userDao";
import {UserRouter} from "./userRouter";
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
        this.title = "Budget App | This is the main page";
        //

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

        console.log("apiResponse: " + (apiResponse as any).users[0].userID);
        console.log(typeof apiResponse);

        let userObject


        //set message
        let options: Object = {
            "message": "Welcome to UVic Seng 350!",
            "bonus": "Hello World",
            "users": apiResponse as any

        };

        console.log(options);

        //render template
        this.render(req, res, "index", options);


    }
}