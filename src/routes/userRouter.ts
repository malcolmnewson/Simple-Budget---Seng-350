import {NextFunction, Request, Response, Router} from "express";
import {UserDao} from "../daos/userDao";

export class UserRouter {

    public static create(router: Router) {
        // log
        console.log("[UserRoute::create] Creating UserRoute route.");

        // route for getting all users
        router.get("/users", async (req: Request, res: Response) => {
            await new UserRouter().getAll(req, res);
        });

        // route for getting an individual user
        router.get("/users/:userID", async (req: Request, res: Response) => {
            await new UserRouter().getOne(req, res);
        });

        // route for deleting a user
        router.post("/users/delete/:userID", async (req: Request, res: Response) => {
            await new UserRouter().deleteOne(req, res);
        });
        router.post("/purchases/upload/banana", async (req: Request, res: Response) => {
            console.log("Successful upload");

        });
    }

    // Dao for handling project_data.users in mongo
    private userDao: UserDao;

    constructor() {
        this.userDao = new UserDao();
    }

    /**
     * Routing method for getting all users from the dao
     *
     * @class userRouter
     * @method getAll
     * @param req {Request} The request object.
     * @param res {Result} The result object
     * @param next {NextFunction} The next function call.
     */
    public async getAll(req: Request, res: Response) {
        let users;

        try {
            users = await this.userDao.getAllUsers();
        } catch {
            console.log("Router: Error getting all users.");
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
     * Routing method for getting a single user from the dao
     *
     * @class userRouter
     * @method getOne
     * @param req {Request} The request object.
     * @param res {Result} The result object.
     */
    public async getOne(req: Request, res: Response) {
        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        const userID = req.params.userID;
        let user;

        try {
            // Send the query to the userDao
            user = await this.userDao.getUser(userID);
        } catch {
            console.log("Router: error getting user");
        }

        if (user) {
            res.status(200);
            res.send({
                    message: "Success",
                    status: res.status,
                    user,
                });
        } else {
            res.status(404);
            res.send({
                    message: "No hero found with the given id.",
                    status: res.status,
                });
        }
    }

    /**
     * Routing method for getting a single user from the dao
     *
     * @class userRouter
     * @method deleteOne
     * @param req {Request} The request object.
     * @param res {Result} The result object.
     */
    public async deleteOne(req: Request, res: Response) {
        const userID = req.params.userID;

        await this.userDao.deleteUser(userID);

        return res.redirect('back');
    }
}
