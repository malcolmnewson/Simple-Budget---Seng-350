import DbClient = require("../DbClient");
import mongodb = require("mongodb");

export class PurchaseDao {

    private purchasesCollection: string = "purchases";

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
     * @return result from upload, null if failed
     */
    public async uploadUsersPurchase(purchase : any){
        //console.log("Uploading: " + JSON.parse(purchase));
        let result;
        try {
            let database = await DbClient.connect();
            result = database!.collection(this.purchasesCollection).insertOne(purchase);
            return result;
        } catch {
             console.log("Dao: error uploading users purchase");
             return null;
        }
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
            console.log("Dao: error updating users purchase");
            return null;
        }
    }
    /**
     * Delete purchase Dao
     *
     * @class purchaseDao
     * @method deletePurchase
     * @param _id The _id of the purchase to be deleted.
     */
    public async deletePurchase(_id : any){
        let result;
        try {
            let database = await DbClient.connect();
            const ObjectID = mongodb.ObjectID;
            const id: mongodb.ObjectID = new ObjectID(_id)
            result = database!.collection(this.purchasesCollection).deleteOne({_id:id});
            return result;
        } catch {
            console.log("Dao: error deleting users purchase");
            return null;
        }
    }
}
