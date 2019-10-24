import DbClient = require("../DbClient");

export class PurchaseDao {

    constructor () {

    }

    public async getAllPurchases() {
        let purchases;

        try {
            let database = await DbClient.connect();
            purchases = database!.collection("purchases").find().toArray();
        } catch {
            console.log("Dao: Error getting all users");
        }

        return purchases;
    }
}