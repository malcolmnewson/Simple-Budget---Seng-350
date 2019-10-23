import DbClient = require("../DbClient");
import  { Collection } from "mongodb";

/*
 * This class is currently not being used; however it eventually will be.
 * There are some design decisions that need to be made.
 */

export class UserDao {
    private collection! : Collection; //Currently not used.
    public allUsers: any;

    constructor() {
        //  console.log("in userdao constructor")
        // this.allUsers = this.getAllUsers();
        //console.log(this.allUsers);
    }

    public async getUser(userID : any) {
        let user = undefined;

        await DbClient.connect()
            .then((db : any) => {
                console.log("Getting the user: " + userID);
                return db!.collection("users").findOne({"userID" : userID});
            })
            .then((userDoc : any) => {
                console.log(userDoc);
                user = userDoc;
            })
            .catch((err : any) => {
                console.log("err.message");
            });

        return user;
    }

    public async getAllUsers() {
        let allUsers = undefined;

        await DbClient.connect()
            .then((db : any) => {
                console.log("Getting the users collection");
                return db!.collection("users").find().toArray();
            })
            .then((users : any) => {
                console.log(users);
                allUsers = users;
            })
            .catch((err : any) => {
                console.log("err.message");
            });

        return allUsers;
    }
}