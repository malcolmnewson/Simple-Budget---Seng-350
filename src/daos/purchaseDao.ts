import DbClient = require("../DbClient");

export class PurchaseDao {

    private purchasesCollection: string = "purchases";

    // constructor() {
    // }

    // Gets all purchases related to the userID
    public async getUsersPurchases(userID : any) {

        try {
            let database = await DbClient.connect();
            return database!.collection(this.purchasesCollection).find({"userID" : userID}).toArray();
        } catch {
            // console.log("Dao: Error getting purchases for user");
        }

        return null;
    }

    // Gets all purchases from all users
    public async getAllPurchases() {

        try {

            let database = await DbClient.connect();
            return database!.collection(this.purchasesCollection).find().toArray();
        } catch {
            // console.log("Dao: Error getting all user purchases");
        }

        return null;
    }
    /**
     * Upload purchase Dao
     *
     * @class PurchaseDao
     * @method uploadUsersPurchase
     * @param req {Request} The express Request object.?
     * @param res {Response} The express Response object.?
     * @param next ?
     * @next {NextFunction} Execute the next method.?
     */
    public async uploadUsersPurchase(){ //purchase : any
        let result;
        try {
            let database = await DbClient.connect();
            result = database!.collection(this.purchasesCollection).insert({"userID":"malcolmnewson","category":"Transport","cost":75.05,"date":{"$date":"2019-02-01T12:00:00Z"},"description":"Gas"});
            //console.log("Dao: error uploading users purchase");
            return result;
        } catch {
             //console.log("Dao: error uploading users purchase");
        }



        return null;
    }
}
