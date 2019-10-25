import DbClient = require("../DbClient");

export class PurchaseDao {

    private purchases_collection:string = "purchases";

    constructor () {

    }

    // Gets all purchases related to the userID
    public async getUsersPurchases(userID : any) {

        try {
            let database = await DbClient.connect();
            return database!.collection(this.purchases_collection).find({"userID" : userID}).toArray();
        } catch {
            console.log("Dao: Error getting purchases for user");
        }

        return null;
    }

    // Gets all purchases from all users
    public async getAllPurchases() {

        try {
            let database = await DbClient.connect();
            return database!.collection(this.purchases_collection).find().toArray();
        } catch {
            console.log("Dao: Error getting all user purchases");
        }

        return null;
    }
}