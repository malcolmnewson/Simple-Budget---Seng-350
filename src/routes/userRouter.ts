import {NextFunction, Request, Response, Router} from "express";
import {UserDao} from "../daos/userDao";

export class UserRouter {

    public static create(router: Router) {
        // log
        // console.log("[UserRoute::create] Creating UserRoute route.");

        // add getAll route
        router.get("/users", async (req: Request, res: Response, next: NextFunction) => {
            await new UserRouter().getAll(req, res, next);
        });

        // add getOne route
        router.get("/users/:userID", async (req: Request, res: Response, next: NextFunction) => {
           await new UserRouter().getOne(req, res, next);
        });

        router.post("/create_user", async (req: Request, res: Response) => {
            console.log("post request received");
            console.log("res: " + res as any);

            await new UserRouter().createUser(req, res);


            res.redirect('back');
            // await new UserRouter().getOne(req, res, next);
        });
    }

    // used to user collection from database
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

    private async createUser(req: Request, res: Response) {
        let result;
        try {
            result = await this.userDao.addNewUser();
        } catch {
            console.log("add new user failed");
        }
        // if (result) {
        //     res.status(200)
        //         .send({
        //             message: "Success",
        //             status: res.status,
        //             result,
        //         });
        // } else {
        //     res.status(404)
        //         .send({
        //             message: "User created.",
        //             status: res.status,
        //         });
        // }

    }
}
