import DbClient = require("../DbClient");

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
            return database!.collection("users").findOne({"userID" : userID});
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
            return database!.collection("users").find().toArray();
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
        });
    }

}
