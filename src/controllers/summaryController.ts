import {Request, Response} from "express";
import {RequestData} from "../routes/requestData";
import {BaseRoute} from "../routes/route";

export class SummaryRoute extends BaseRoute {
    /**
     * The summary page .
     *
     * @class SummaryRoute
     * @method summary
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     */
    public async summary(req: Request, res: Response) {

        // set custom title
        this.title = "My Summary";
        let userID = req.params.userID;
        const categoryList = ['Clothing','Food','School','Transport','Other']

        //Assume year time frame. Check if req.body is empty. If so, then take time frame from there
        let timeFrame = 'Year'
        if(!(req.body.constructor === Object && Object.keys(req.body).length === 0)) {
            timeFrame = req.body.timeFrame;
        }

        const purchases = await new RequestData().requestPurchases(userID, res);

        //if purchases is empty
        if(purchases.length == 0){
            const options: object = {
                user: userID,
                dates: [],
                results: []
            };

            this.render(req, res, "summary",options);
            return 0;
        }

        //get all categories from purchases
        const categories = purchases.map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        categories.sort();

        //get all dates from purchases

        let tempDates = purchases.map((item) => item.date)
            .filter((value, index, self) => self.indexOf(value) === index);
        tempDates.sort();

        //get first date, reset to first day of year
        let temp = new Date(tempDates[0]);
        let tempStart = new Date(temp.getFullYear(),0);
        tempStart.setMinutes(1);
        //get last date in purchases
        let tempEnd = new Date(tempDates[tempDates.length-1]);

        const startDate = new Date(tempStart);
        //date contains iso dates used for filtering purchases
        let date = this.makeDateList(tempStart,tempEnd,timeFrame);

        //tableDate contains column names for pug rendering
        let tableDate = this.makeTableDateList(startDate,tempEnd,timeFrame);

        //calculate all the totals for each category and time
        let results = this.calcTotals(categories,purchases,date);

        // set options
        const options: object = {
            user: userID,
            dates: tableDate,
            results: results
        };

        // render template
        this.render(req, res, "summary", options);
    }
    /**
     * calculate total costs in each category and time frame
     *
     * @class SummaryRoute
     * @method calcTotals
     * @param categories List of all the categories.
     * @param purchases List of all the json objects of user purchases
     * @param date List of all the dates to use as boundaries for filter
     */
    private calcTotals(categories: any, purchases: any, date: any){
        let results = [];
        //calculate totals for each category and time frame
        for (let i = 0; i<categories.length;i++){
            var total = 0;
            let tempResults = [categories[i]];

            for (let j = 1; j<date.length;j++) {
                let startDate = date[j-1];
                let endDate = date[j];
                for (var purchase in purchases) {
                    if(purchases[purchase].category == categories[i]){
                        if((purchases[purchase].date>startDate)&&(purchases[purchase].date<endDate)){
                            total = total + Number(purchases[purchase].cost);
                        }
                    }
                }
                tempResults.push(total);
                total = 0.0;

            }
            results.push(tempResults);
        }
        return results;
    }
    /**
     * make list of dates for filter
     *
     * @class SummaryRoute
     * @method makeDataList
     * @param tempStart The date to start at
     * @param tempEnd The date to end at
     * @param timeFrame either 'year' or implied month
     */
    private makeDateList(tempStart: any, tempEnd: any, timeFrame: any){
        let date = [];
        if (timeFrame=='Year') {
            date.push(tempStart.toISOString());
            let spread = tempEnd.getFullYear()-tempStart.getFullYear();
            for (let j = 0; j<spread+1;j++) {
                tempStart.setFullYear(tempStart.getFullYear()+1);
                date.push(tempStart.toISOString());
            }
            // add one more so the last year has an end point to check purchases against.
            tempStart.setFullYear(tempStart.getFullYear()+1);
        } else { //month time frame
            var spread = 12;
            tempStart.setFullYear(tempEnd.getFullYear());
            date.push(tempStart.toISOString());
            for (let j = 0; j<spread;j++) {
                tempStart.setMonth(tempStart.getMonth()+1);
                tempStart.setDate(1);
                date.push(tempStart.toISOString());
            }
        }
        return date;
    }
    /**
     * make list of dates for table on summary pug
     *
     * @class SummaryRoute
     * @method makeTableDataList
     * @param startDate The date to start at
     * @param tempEnd The date to end at
     * @param timeFrame either 'year' or implied month
     */
    private makeTableDateList(startDate: any, tempEnd: any, timeFrame: any){
        let tableDate = [];
        if (timeFrame=='Year') {
            let spread = tempEnd.getFullYear()-startDate.getFullYear();
            for (let j = 0; j<spread+1;j++) {
                tableDate.push(startDate.getFullYear());
                startDate.setFullYear(startDate.getFullYear()+1);
            }
        } else { //month time frame
            tableDate = ["Jan","Feb","March","April","May","June", "July","August","Sept","Oct","Nov","Dec"];
        }
        return tableDate;
    }
}