import DbClient = require("../DbClient");

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
            let purchases = database!.collection(this.purchasesCollection).find({"userID" : userID}).toArray();
            DbClient.closeConnection();
            return purchases;
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
            let purchases = database!.collection(this.purchasesCollection).find().toArray();
            DbClient.closeConnection();
            return purchases;
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
        //console.log("Uploading: " + JSON.parse(purchase));
        let result;
        try {
            let database = await DbClient.connect();
            result = database!.collection(this.purchasesCollection).insertOne(purchase);
            return result;
        } catch {
             //console.log("Dao: error uploading users purchase");
        }
        return null;
    }
}
