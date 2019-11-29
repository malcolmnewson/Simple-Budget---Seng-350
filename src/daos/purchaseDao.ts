import DbClient = require("../DbClient");
import mongodb = require("mongodb");

export class PurchaseDao {

    private purchasesCollection: string = "purchases";

    // constructor() {
    // }

    /**
     * Gets all purchases for a single user.
     *
     * @class purchaseDao
     * @method getUsersPurchases
     * @param userID {any} The userID for retrieval.
     * @return an array of purchase objects if successful, null otherwise.
     */
    public async getUsersPurchases(userID : any) {

        try {
            let database = await DbClient.connect();
            return database!.collection(this.purchasesCollection).find({"userID" : userID}).toArray();
        } catch {
            console.log("Dao: Error getting purchases for user");
            return null;
        }
    }

    /**
     * Gets all purchases for all users.
     *
     * @class purchaseDao
     * @method getAllPurchases
     * @return an array of purchase objects if successful, null otherwise.
     */
    public async getAllPurchases() {

        try {

            let database = await DbClient.connect();
            return database!.collection(this.purchasesCollection).find().toArray();
        } catch {
            console.log("Dao: Error getting all user purchases");
            return null;
        }
    }
    /**
     * Upload purchase Dao
     *
     * @class purchaseDao
     * @method uploadUsersPurchase
     * @param purchase The json object to be uploaded.
     */
    public async uploadUsersPurchase(purchase : any){
        let result;
        try {
            let database = await DbClient.connect();
            result = database!.collection(this.purchasesCollection).insert(purchase);
            return result;
        } catch {
             //console.log("Dao: error uploading users purchase");
        }
        return null;
    }
    /**
     * Update purchase Dao
     *
     * @class purchaseDao
     * @method updateUsersPurchase
     * @param purchase The json object to be updated.
     */
    public async updateUsersPurchase(purchase : any){
        let result;
        try {
            let database = await DbClient.connect();
            const ObjectID = mongodb.ObjectID;
            const id: mongodb.ObjectID = new ObjectID(purchase._id)
            delete purchase["_id"];
            result = database!.collection(this.purchasesCollection).replaceOne({_id:id}, purchase);
            return result;
        } catch {
            //console.log("Dao: error uploading users purchase");
        }
        return null;
    }
    /**
     * get Summary purchases for search criteria
     *
     * @class purchaseDao
     * @method getSummaryPurchases
     * @param purchase The json object to be updated.
     */
    public async getSummaryPurchases(userID : any, category: any, dateStart: any, dateEnd: any){
        let result;
        try {
            let database = await DbClient.connect();
            const ObjectID = mongodb.ObjectID;
            //result = database!.collection(this.purchasesCollection).find().toArray();
            //var isoStart = new Date(dateStart).toISOString();
            //var isoEnd = new Date(dateEnd).toISOString();
            //console.log("userID = " + userID)
            //console.log("category= " + category)
            //console.log("date start= "+ dateStart)
            //console.log("date end= "+ dateEnd)
            result = database!.collection(this.purchasesCollection).find(
                {"userID":userID,"category":category,
                    "date":{$gte: dateStart,$lt: dateEnd}}).toArray();
            return result;
        } catch {
            //console.log("Dao: error uploading users purchase");
        }
        return null;
    }
}
