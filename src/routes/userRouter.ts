import {NextFunction, Request, Response, Router} from 'express';
import {UserDao} from "../daos/userDao"

export class UserRouter {
    // used to access database
    private userDao : UserDao;

    public static async create(router: Router) {
        //log
        console.log("[UserRoute::create] Creating UserRoute route.");

        //add getAll route
        router.get("/users", async(req: Request, res: Response, next: NextFunction) => {
            await new UserRouter().getAll(req, res, next);
        });

        // add getOne route
        router.get("/users/:userID", async(req: Request, res: Response, next: NextFunction) => {
           await new UserRouter().getOne(req, res, next);
        });
    }

    constructor() {
        this.userDao = new UserDao();
    }

    /**
     * GET all users.
     */
    public async getAll(req: Request, res: Response, next: NextFunction) {
        let users = undefined;

        try {
            users = await this.userDao.getAllUsers();
        } catch {
            console.log("Router: Error getting all users.");
        }

        if (users !== undefined) {
            res.status(200)
                .send({
                   message: 'Success',
                   status: res.status,
                   users
                });
        } else {
            res.status(500)
                .send({
                    message: 'Success',
                    status: res.status,
                    users
                });
        }
    }

    /**
     * GET one user by id.
     */
    public async getOne(req: Request, res: Response, next: NextFunction) {
        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        let userID = req.params.userID;
        let user;

        try {
            // Send the query to the userDao
            user = await this.userDao.getUser(userID);
        } catch {
            console.log("Router: error getting user");
        }

        if (user) {
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    user
                });
        } else {
            res.status(404)
                .send({
                    message: 'No user found with the given id.',
                    status: res.status
                });
        }
    }
}