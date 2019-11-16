import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {LoginController} from "./loginController";
import {RequestData} from "./requestData";

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
            new LoginController().login(req, res, next);
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

        const userData = await new RequestData().requestAllUsers(res);
        const userIDs = [];
        for (const user of userData) {
            userIDs.push(user.userID);
        }

        // set options
        const options: object = {
            instructions: "Select your user ID to view your purchasePage",
            users: userIDs,
        };

        // render template
        this.render(req, res, "index", options);
    }
}
