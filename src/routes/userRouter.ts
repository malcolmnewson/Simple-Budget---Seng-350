import {Router, Request, Response, NextFunction} from 'express';
import { UserDao } from "../daos/userDao"

export class UserRouter {
    // used to access database
    private userDao : UserDao;

    public static create(router: Router) {
        //log
        console.log("[UserRoute::create] Creating UserRoute route.");

        //add getAll route
        router.get("/users", (req: Request, res: Response, next: NextFunction) => {
            new UserRouter().getAll(req, res, next);
        });

        // add getOne route
        router.get("/users/:userID", (req: Request, res: Response, next: NextFunction) => {
            new UserRouter().getOne(req, res, next);
        });
    }

    constructor() {
        this.userDao = new UserDao();
    }

    /**
     * GET all users.
     */
    public getAll(req: Request, res: Response, next: NextFunction) {

        this.userDao.getAllUsers()
            .then((users : any) => {
                // now we can do something with users
                if (users != undefined) {
                    res.status(200)
                        .send({
                            message: 'Success',
                            status: res.status,
                            users
                        });
                } else {
                    res.status(5000)
                        .send({
                            message: 'Failure',
                            status: res.status,
                        });
                }
            })
            .catch((err : any) => {
                console.log("err.message");
            });
    }

    /**
     * GET one user by id.
     */
    public getOne(req: Request, res: Response, next: NextFunction) {
        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        let query = req.params.userID;

        // Send the query to the userDao
        this.userDao.getUser(query)
            .then((user : any) => {
                // Now we can do something with user
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
                            message: 'No hero found with the given id.',
                            status: res.status
                        });
                }
            })
            .catch((err : any) => {
                console.log("err.message");
            })
    }
}