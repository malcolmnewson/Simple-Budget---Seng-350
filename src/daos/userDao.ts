import DbClient = require("../DbClient");
import  { Collection } from "mongodb";

/*
 * This class is currently not being used; however it eventually will be.
 * There are some design decisions that need to be made.
 */

export class UserDao {

    constructor() {

    }

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

    public async getAllUsers() {
        let users = undefined;

        try {
            let database = await DbClient.connect();
            users = database!.collection("users").find().toArray();
        } catch {
            console.log("Dao: Error getting all users.");
        }

        return users;
    }
}