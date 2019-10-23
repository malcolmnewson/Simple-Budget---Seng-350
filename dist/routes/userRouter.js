"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userDao_1 = require("../daos/userDao");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.userDao = new userDao_1.UserDao();
    }
    UserRouter.create = function (router) {
        console.log("[UserRoute::create] Creating UserRoute route.");
        //add getAll route
        router.get("/users", function (req, res, next) {
            //console.log(router.stack[0].path);
            new UserRouter().getAll(req, res, next);
            //console.log(res);
        });
        // add getOne route
        router.get("/users/:userID", function (req, res, next) {
            new UserRouter().getOne(req, res, next);
        });
    };
    UserRouter.prototype.getAllWithoutRouter = function () {
        var router;
        router = express_1.default.Router();
        router.post("/users");
        //let allUsers = undefined;
        console.log("CREATE WITHOUT ROUTER");
        //add getAll route
        router.get("/users", function (req, res, next) {
            new UserRouter().getAll(req, res, next);
        });
        // console.log("get all without router " +allUsers);
        //  return allUsers;
        console.log("users in getAllwithoutrouter: " + this.allUsers);
        //return this.allUsers;
    };
    /**
     * GET all users.
     */
    UserRouter.prototype.getAll = function (req, res, next) {
        var _this = this;
        console.log("In userRouter.getAll");
        var all = undefined;
        this.userDao.getAllUsers()
            .then(function (users) {
            // now we can do something with users
                // console.log(users)
            if (users != undefined) {
                _this.allUsers = users;
                console.log("***" + _this.allUsers);
                res.status(200)
                    .send({
                    message: 'Success',
                    status: res.status,
                    users: users
                });
                //return users;
            }
            else {
                res.status(5000)
                    .send({
                    message: 'Failure',
                    status: res.status,
                });
            }
        })
            .catch(function (err) {
            console.log("err.message");
        });
        return this.allUsers;
    };
    /**
     * GET one user by id.
     */
    UserRouter.prototype.getOne = function (req, res, next) {
        // Pull the requested id out. (ex. if the url is .../users/<userID> then query = <userID>)
        var query = req.params.userID;
        // Send the query to the userDao
        this.userDao.getUser(query)
            .then(function (user) {
            // Now we can do something with user
            if (user) {
                res.status(200)
                    .send({
                    message: 'Success',
                    status: res.status,
                    user: user
                });
            }
            else {
                res.status(404)
                    .send({
                    message: 'No hero found with the given id.',
                    status: res.status
                });
            }
        })
            .catch(function (err) {
            console.log("err.message");
        });
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUF5RTtBQUN6RSwyQ0FBeUM7QUFFekM7SUEyQ0k7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBRWpDLENBQUM7SUF6Q2EsaUJBQU0sR0FBcEIsVUFBcUIsTUFBYztRQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFFN0Qsa0JBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtZQUNqRSxvQ0FBb0M7WUFDcEMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV4QyxtQkFBbUI7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7WUFDekUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBbUIsR0FBMUI7UUFDSSxJQUFJLE1BQXNCLENBQUM7UUFDM0IsTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0QiwyQkFBMkI7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRXJDLGtCQUFrQjtRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7WUFDaEUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNKLG9EQUFvRDtRQUNyRCxvQkFBb0I7UUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsdUJBQXVCO0lBRTNCLENBQUM7SUFTRDs7T0FFRztJQUNJLDJCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQTdELGlCQWlDQztRQWhDRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDbkMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2FBQ3JCLElBQUksQ0FBQyxVQUFDLEtBQVc7WUFDZCxxQ0FBcUM7WUFDckMscUJBQXFCO1lBR3JCLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ1YsSUFBSSxDQUFDO29CQUNGLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2xCLEtBQUssRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQztnQkFDUCxlQUFlO2FBRWxCO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNYLElBQUksQ0FBQztvQkFDRixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2lCQUNyQixDQUFDLENBQUM7YUFDVjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFJRDs7T0FFRztJQUNJLDJCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3pELDBGQUEwRjtRQUMxRixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU5QixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFDLElBQVU7WUFDYixvQ0FBb0M7WUFDcEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ1YsSUFBSSxDQUFDO29CQUNGLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNWLElBQUksQ0FBQztvQkFDRixPQUFPLEVBQUUsa0NBQWtDO29CQUMzQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07aUJBQ3JCLENBQUMsQ0FBQzthQUNWO1FBQ0wsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDO0FBeEhZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb259IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgVXNlckRhbyB9IGZyb20gXCIuLi9kYW9zL3VzZXJEYW9cIlxuXG5leHBvcnQgY2xhc3MgVXNlclJvdXRlciB7XG4gICAgLy8gdXNlZCB0byBhY2Nlc3MgZGF0YWJhc2VcbiAgICBwcml2YXRlIHVzZXJEYW8gOiBVc2VyRGFvO1xuICAgIHB1YmxpYyBhbGxVc2VyczogYW55O1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocm91dGVyOiBSb3V0ZXIpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIltVc2VyUm91dGU6OmNyZWF0ZV0gQ3JlYXRpbmcgVXNlclJvdXRlIHJvdXRlLlwiKTtcblxuICAgICAgICAvL2FkZCBnZXRBbGwgcm91dGVcbiAgICAgICAgcm91dGVyLmdldChcIi91c2Vyc1wiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocm91dGVyLnN0YWNrWzBdLnBhdGgpO1xuICAgICAgICAgICAgbmV3IFVzZXJSb3V0ZXIoKS5nZXRBbGwocmVxLCByZXMsIG5leHQpO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhZGQgZ2V0T25lIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvdXNlcnMvOnVzZXJJRFwiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG5ldyBVc2VyUm91dGVyKCkuZ2V0T25lKHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFdpdGhvdXRSb3V0ZXIoKSB7XG4gICAgICAgIGxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICAgICAgICByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgICAgICByb3V0ZXIucG9zdChcIi91c2Vyc1wiKTtcblxuICAgICAgICAvL2xldCBhbGxVc2VycyA9IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBXSVRIT1VUIFJPVVRFUlwiKTtcblxuICAgICAgICAvL2FkZCBnZXRBbGwgcm91dGVcbiAgICAgICAgcm91dGVyLmdldChcIi91c2Vyc1wiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgICBuZXcgVXNlclJvdXRlcigpLmdldEFsbChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IGFsbCB3aXRob3V0IHJvdXRlciBcIiArYWxsVXNlcnMpO1xuICAgICAgLy8gIHJldHVybiBhbGxVc2VycztcblxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXJzIGluIGdldEFsbHdpdGhvdXRyb3V0ZXI6IFwiICsgdGhpcy5hbGxVc2Vycyk7XG4gICAgICAgIC8vcmV0dXJuIHRoaXMuYWxsVXNlcnM7XG5cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51c2VyRGFvID0gbmV3IFVzZXJEYW8oKTtcblxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBHRVQgYWxsIHVzZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbiB1c2VyUm91dGVyLmdldEFsbFwiKVxuICAgICAgICBsZXQgYWxsID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRoaXMudXNlckRhby5nZXRBbGxVc2VycygpXG4gICAgICAgICAgICAudGhlbigodXNlcnMgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBub3cgd2UgY2FuIGRvIHNvbWV0aGluZyB3aXRoIHVzZXJzXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXG5cblxuICAgICAgICAgICAgICAgIGlmICh1c2VycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxVc2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKlwiICsgdGhpcy5hbGxVc2Vycyk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gdXNlcnM7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ZhaWx1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVyciA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyLm1lc3NhZ2VcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsVXNlcnM7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIEdFVCBvbmUgdXNlciBieSBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T25lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIFB1bGwgdGhlIHJlcXVlc3RlZCBpZCBvdXQuIChleC4gaWYgdGhlIHVybCBpcyAuLi4vdXNlcnMvPHVzZXJJRD4gdGhlbiBxdWVyeSA9IDx1c2VySUQ+KVxuICAgICAgICBsZXQgcXVlcnkgPSByZXEucGFyYW1zLnVzZXJJRDtcblxuICAgICAgICAvLyBTZW5kIHRoZSBxdWVyeSB0byB0aGUgdXNlckRhb1xuICAgICAgICB0aGlzLnVzZXJEYW8uZ2V0VXNlcihxdWVyeSlcbiAgICAgICAgICAgIC50aGVuKCh1c2VyIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTm93IHdlIGNhbiBkbyBzb21ldGhpbmcgd2l0aCB1c2VyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gaGVybyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBpZC4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnIubWVzc2FnZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSJdfQ==