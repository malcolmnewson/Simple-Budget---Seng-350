import DbClient = require("../DbClient");

export class UserDao {

    constructor() {

    }

    // Returns a single user's info by their ID if they exist.
    // Returns null otherwise.
    public async getUser(userID : any) {

        try {
            let database = await DbClient.connect();
            return database!.collection("users").findOne({"userID" : userID});
        } catch {
            console.log("Dao: Error getting user");
        }

        return null;
    }

    // Returns all users if successful, returns null otherwise
    public async getAllUsers() {

        try {
            let database = await DbClient.connect();
            return database!.collection("users").find().toArray();
        } catch {
            console.log("Dao: Error getting all users.");
        }

        return null;
    }
}