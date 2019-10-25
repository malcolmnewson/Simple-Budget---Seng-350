import DbClient = require("../DbClient");

export class UserDao {

    constructor() {

    }

    // Returns a single user's info by their ID
    public async getUser(userID : any) {
        let user;

        try {
            let database = await DbClient.connect();
            user = database!.collection("users").findOne({"userID" : userID});
        } catch {
            console.log("Dao: Error getting user");
        }

        return user;
    }

    // Returns all users
    public async getAllUsers() {
        let users;

        try {
            let database = await DbClient.connect();
            users = database!.collection("users").find().toArray();
        } catch {
            console.log("Dao: Error getting all users.");
        }

        return users;
    }
}