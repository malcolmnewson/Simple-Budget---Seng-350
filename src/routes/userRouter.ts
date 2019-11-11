import {NextFunction, Request, Response, Router} from "express";
import {UserDao} from "../daos/userDao";

export class UserRouter {

    public static create(router: Router) {
        // log
        // console.log("[UserRoute::create] Creating UserRoute route.");

        // route for getting all users
        router.get("/users", async (req: Request, res: Response, next: NextFunction) => {
            await new UserRouter().getAll(req, res, next);
        });

        // route for getting an individual user
        router.get("/users/:userID", async (req: Request, res: Response, next: NextFunction) => {
            await new UserRouter().getOne(req, res, next);
        });

        // route for deleting a user
        router.post("/users/delete/:userID", async (req: Request, res: Response) => {
            await new UserRouter().deleteOne(req, res);
        });
    }

    // Dao for handling project_data.users in mongo
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    /**
     * GET all users.
     */
    public async getAll(req: Request, res: Response, next: NextFunction) {
        let users;

        try {
            users = await this.userDao.getAllUsers();
        } catch {
            // console.log("Router: Error getting all users.");
        }

        if (users !== undefined) {
            res.status(200)
                .send({
                    message: "Success",
                   status: res.status,
                    users,
                });
        } else {
            res.status(500)
                .send({
                    message: "Success",
                    status: res.status,
                    users,
                });
        }
    }

    /**
     * GET one user by id.
     */
    public async getOne(req: Request, res: Response, next: NextFunction) {
        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        const userID = req.params.userID;
        let user;

        try {
            // Send the query to the userDao
            user = await this.userDao.getUser(userID);
        } catch {
            // console.log("Router: error getting user");
        }

        if (user) {
            res.status(200)
                .send({
                    message: "Success",
                    status: res.status,
                    user,
                });
        } else {
            res.status(404)
                .send({
                    message: "No hero found with the given id.",
                    status: res.status,
                });
        }
    }

    /*
     * POST deletes a user by userID
     */
    public async deleteOne(req: Request, res: Response) {
        const userID = req.params.userID;
        let result = await this.userDao.deleteUser(userID);

        // FINISH THIS.

        if (result !== null) {
            // success

        } else {
            // unsuccessful

        }

        res.send();
    }
}
