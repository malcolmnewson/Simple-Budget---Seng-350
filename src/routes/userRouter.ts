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

        // route for adding a user
        router.post("/users/create_user", async (req: Request, res: Response) => {
            await new UserRouter().createUser(req, res);
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
     * @param res {Response} The response object
     * @param next {NextFunction} The next function call.
     */
    public async getAll(req: Request, res: Response) {
        console.log("[User Router] getAll()");

        let users = await this.userDao.getAllUsers();

        if (users !== null) {
            return res.send({
                    message: "Success",
                    status: 200,
                    users,
                });
        } else {
            return res.send({
                    message: "Fail",
                    status: 404,
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
     * @param res {Response} The response object.
     */
    public async getOne(req: Request, res: Response) {
        console.log("[User Router] getOne()");

        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        const userID = req.params.userID;
        let user = await this.userDao.getUser(userID);

        if (user !== null) {
            return res.send({
                    message: "Success",
                    status: 200,
                    user,
                });
        } else {
            return res.send({
                    message: "Fail",
                    status: 404,
                });
        }
    }

    /**
     * Routing me thod for getting a single user from the dao
     *
     * @class userRouter
     * @method deleteOne
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     */
    public async deleteOne(req: Request, res: Response) {
        console.log("[User Router] deleteOne()");
        const userID = req.params.userID;

        await this.userDao.deleteUser(userID);

        return res.redirect('back');
    }

    /**
     * Routing method for adding a user
     *
     * @class userRouter
     * @method createUser
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     */
    public async createUser(req: Request, res: Response) {
        console.log("[User Router] createUser()");

        await this.userDao.addNewUser(req.body);
        return res.redirect('back');
    }
}
