import DbClient = require("../DbClient");

export class UserDao {

    private usersCollection: string = "users";

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
        console.log("[UserDao] getAllUsers()");


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

        try {
            let database = await DbClient.connect();
            let result = await database!.collection("users").findOneAndDelete({"userID" : userID});
            return result.value;
        } catch {
            console.log("Dao: Error deleting user.");
            return null;
        }
    }

    public async addNewUser(user: any) {

        if (user.admin === 'true') {
            user.admin = true;
        } else {
            user.admin = false;
        }
        user.userID = user.userID as string;
        user.givenName = user.givenName as string;

        try {
            let database = await DbClient.connect();
            let result = await database!.collection(this.usersCollection).insertOne(user);
            return result;
        } catch {
            console.log("Dao: Error adding the user.");
            return null;
        }
    }
}
