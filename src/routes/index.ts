import {NextFunction, Request, Response, Router} from "express";
import {BaseRoute} from "./route";
import {LoginController} from "./loginController";
import {RequestData} from "./requestData";
import {PurchaseDao} from "../daos/purchaseDao";

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

        // add summary page route for different time frame
        router.post("/user/summary/timeFrame", async (req: Request, res: Response, next: NextFunction) => {
            req.params.userID = req.body.userID;
            await new IndexRoute().summary(req, res);
        });
        // add summary page route form purchases page
        router.get("/user/summary/:userID", async (req: Request, res: Response, next: NextFunction) => {
            await new IndexRoute().summary(req, res);
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
    /**
     * The summary page route.
     *
     * @class IndexRoute
     * @method summary
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    private async summary(req: Request, res: Response) {
        // set custom title
        this.title = "Budget App | Summary Page!";
        let userID = req.params.userID;
        const categoryList = ['Clothing','Food','School','Transport','Other']

        //Assume year time frame. Check if req.body is empty. If so, then take time frame from there
        let timeFrame = 'Year'
        if(!(req.body.constructor === Object && Object.keys(req.body).length === 0)) {
            timeFrame = req.body.timeFrame;
        }

        const purchases = await new RequestData().requestPurchases(userID, res);

        const categories = purchases.map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        //get all dates from purchases
        const tempDates = purchases.map((item) => item.date)
            .filter((value, index, self) => self.indexOf(value) === index);
        tempDates.sort();

        //take first and last date to generate range of dates for next step
        let tempStart = new Date(tempDates[0]);
        let tempEnd = new Date(tempDates[tempDates.length-1]);
        tempEnd.setMonth(tempEnd.getMonth()+1);
        tempEnd.setDate(1);

        let firstDate = new Date(tempStart.getFullYear(),tempStart.getMonth());
        firstDate.setMinutes(1);
        let startDate = firstDate.toISOString();
        let nextDate = firstDate;


        let date = [];
        let tableDate = [];
        if (timeFrame=='Year') {
            let spread = -firstDate.getFullYear()+tempEnd.getFullYear();
            for (let j = 0; j<spread;j++) {
                nextDate.setFullYear(nextDate.getFullYear()+1);
                tableDate.push(nextDate.getFullYear()-1);
                date.push(nextDate.toISOString());
            }
        } else { //month time frame
            var spread = 12;
            tempEnd.setFullYear(tempEnd.getFullYear()-1);
            startDate = tempEnd.toISOString();
            tableDate = ["Jan","Feb","March","April","May","June", "July","August","Sept","Oct","Nov","Dec"];
            for (let j = 0; j<spread;j++) {
                nextDate = tempEnd;
                nextDate.setMonth(nextDate.getMonth()+1);
                nextDate.setDate(1);
                date.push(nextDate.toISOString());
            }
        }

        let results = [];
        for (let i = 0; i<categories.length;i++){
            var total = 0;
            let tempResults = [categories[i]];
            for (var j in date) {
                let endDate = date[j];
                const data = await new PurchaseDao().getSummaryPurchases(userID, categories[i], startDate, endDate);
                startDate = endDate;
                if (data) {
                    for (var x in data) {
                        total = total + Number(data[x].cost);
                    }
                    tempResults.push(total);
                    total = 0.0;
                }
            }
            results.push(tempResults);
        }
        // set options
        const options: object = {
            user: userID,
            dates: tableDate,
            results: results
        };

        // render template
        this.render(req, res, "summary", options);
    }
}
