import DbClient = require("../DbClient");
import {Db} from "mongodb";

export class UserDao {

    constructor() {

    }

    /**
     * Gets a single user object from Mongo.
     *
     * @class userDao
     * @method getUser
     * @param userID {any} The userID for retrieval.
     * @return user object if successful, null otherwise.
     */
    public async getUser(userID : any) {

        try {
            let database = await DbClient.connect();
            let user = database!.collection("users").findOne({"userID": userID});
            DbClient.closeConnection();
            return user;
        } catch {
            console.log("Dao: Error getting user");
            return null;
        }
    }


    /**
     * Gets all user objects from Mongo.
     *
     * @class userDao
     * @method getAllUsers
     * @return an array of all user objects if successful, null otherwise
     */
    public async getAllUsers() {

        try {
            let database = await DbClient.connect();
            let users = database!.collection("users").find().toArray();
            DbClient.closeConnection();
            return users;
        } catch {
            console.log("Dao: Error getting all users.");
            return null;
        }
    }

    /**
     * Deletes the specified user from Mongo.
     *
     * @class userDao
     * @method deleteUser
     * @param userID {any} The userID for deletion.
     * @return deleted user object if successful, null otherwise.
     */
    public async deleteUser(userID : any) {

        let database = await DbClient.connect();

        database!.collection("users").findOneAndDelete({"userID" : userID}, (error : any, result : any) => {

            //check result.value to see if the deletion was successful.
            if (result.value == null) {
                console.log("Failed to delete user.");
                return null;
            } else {
                return result.value;
            }
        })
        }

    public async addNewUser() {
        const testUser = {
            "_id": {"$oid": "5dd042fb1c9d440000f6077c"},
            "userID": "test_user7",
            "givenName": "Test User",
            "admin": false
        }

        try {
            let database = await DbClient.connect();
            return database!.collection("users").insertOne(testUser);
        } catch {
            console.log("Error inserting user")
        }
        return null;

        }

}
