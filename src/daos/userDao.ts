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

    public async addNewUser(user: any) {
        // const testUser = {
        //     "userID": "test_user7",
        //     "givenName": "Test User",
        //     "admin": false
        // }


        if (user.admin === 'true') {
            user.admin = true;
        } else {
            user.admin = false;
        }
        user.userID = user.userID as string;
        user.givenName = user.givenName as string;

        let database = await DbClient.connect();
        let result;

        database!.collection(this.usersCollection).insertOne(user, (error: any, result: any) => {
            if (result == null) {
                console.log("failed to add user");
                console.log(error);
                return null;
            } else {
                console.log("added user");
                console.log(user);
                return null;
            }
        });

        // try {
        //
        //     result =  database!.collection(this.usersCollection).insertOne(testUser);
        //     console.log("result: " + result);
        //     return result;
        // } catch {
        //     console.log("Error inserting user")
        // }
        // return null;

        }

}
