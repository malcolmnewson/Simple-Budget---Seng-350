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
            // console.log("Dao: Error getting user");
        }

        return null;
    }

    // Returns all users if successful, returns null otherwise
    public async getAllUsers() {

        try {
            let database = await DbClient.connect();
            return database!.collection("users").find().toArray();
        } catch {
            // console.log("Dao: Error getting all users.");
        }

        return null;
    }

    // Deletes the specified userID from project_data.users
    // Returns null if unsuccessful. Otherwise returns the deleted object.
    public async deleteUser(userID : any) {

        let database = await DbClient.connect();

        database!.collection("users").findOneAndDelete({"userID" : userID}, (error : any, result : any) => {

            //check result.value to see if the deletion was successful.
            if (result.value == null) {
                console.log("Failed to delete user.");
            } else {
                console.log("Successfully deleted user.");
            }

            return result.value;
        });
    }

}
