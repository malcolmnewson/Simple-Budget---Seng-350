import DbClient = require("../DbClient");

export class PurchaseDao {

    private purchasesCollection: string = "purchases";

    // constructor() {
    // }

    // Gets all purchases related to the userID
    public async getUsersPurchases(userID: any) {
        let purchases;

        try {
            const database = await DbClient.connect();
            purchases = database!.collection(this.purchasesCollection).find({userID}).toArray();
        } catch {
            // console.log("Dao: Error getting purchases for user");
        }

        return purchases;
    }

    // Gets all purchases from all users
    public async getAllPurchases() {
        let purchases;

        try {
            const database = await DbClient.connect();
            purchases = database!.collection(this.purchasesCollection).find().toArray();
        } catch {
            // console.log("Dao: Error getting all user purchases");
        }

        return purchases;
    }
}
