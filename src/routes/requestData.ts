import {Response} from "express";
import * as http from "http";

export class RequestData {

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {

    }

    /**
     * Http get request all users' info.
     * @class RequestData
     * @method requestAllUsers
     * @param res {Response} The express Response object.
     * @return userIDs.
     */
    public async requestAllUsers(res: Response) {
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get("http://localhost:3000/users", async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });
            });
        });

        const userIDs = [];
        for (const user of (apiResponse as any).users) {
            userIDs.push(user);
        }
        return userIDs;
    }

    /**
     * Http get request one user's info.
     * @class RequestData
     * @method requestAllUsers
     * @param userID {string} id of user specidied
     * @param res {Response} The express Response object.
     * @return user.
     */
    public async requestUser(userID: string, res: Response) {
        const address = "http://localhost:3000/users/" + userID;
        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });
            });
        });
        return (apiResponse as any).user;
    }

    /**
     * Http get request one user's purchases.
     * @class RequestData
     * @method requestPurchases
     * @param userID {string} id of user specified
     * @param res {Response} The express Response object.
     * @return userPurchases.
     */
    public async requestPurchases(userID: string, res: Response) {
        const address = "http://localhost:3000/users/" + userID;

        let data = "";
        let apiResponse = await new Promise((resolve, reject) => {
            http.get(address, async (res) => {
                res.on("data", (chunk) => {
                    data += chunk;
                });
                await res.on("end", () => {
                    apiResponse = JSON.parse(data);
                    resolve(apiResponse);
                });

            });
        });

        const userPurchases = [];
        for (const purchase of (apiResponse as any).user) {
            userPurchases.push(purchase);
        }
        return userPurchases;
    }

}
