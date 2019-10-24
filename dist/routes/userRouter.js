"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var userDao_1 = require("../daos/userDao");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.userDao = new userDao_1.UserDao();
    }
    UserRouter.create = function (router) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //log
                console.log("[UserRoute::create] Creating UserRoute route.");
                //add getAll route
                router.get("/users", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new UserRouter().getAll(req, res, next)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                // add getOne route
                router.get("/users/:userID", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new UserRouter().getOne(req, res, next)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * GET all users.
     */
    UserRouter.prototype.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var users, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        users = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userDao.getAllUsers()];
                    case 2:
                        users = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        console.log("Router: Error getting all users.");
                        return [3 /*break*/, 4];
                    case 4:
                        if (users !== undefined) {
                            res.status(200)
                                .send({
                                message: 'Success',
                                status: res.status,
                                users: users
                            });
                        }
                        else {
                            res.status(500)
                                .send({
                                message: 'Success',
                                status: res.status,
                                users: users
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * GET one user by id.
     */
    UserRouter.prototype.getOne = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userID, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userID = req.params.userID;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userDao.getUser(userID)];
                    case 2:
                        // Send the query to the userDao
                        user = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        console.log("Router: error getting user");
                        return [3 /*break*/, 4];
                    case 4:
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
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBRXpDO0lBbUJJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBakJtQixpQkFBTSxHQUExQixVQUEyQixNQUFjOzs7O2dCQUNyQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztnQkFFN0Qsa0JBQWtCO2dCQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFNLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7OztvQ0FDdEUscUJBQU0sSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBQTs7Z0NBQTdDLFNBQTZDLENBQUM7Ozs7cUJBQ2pELENBQUMsQ0FBQztnQkFFSCxtQkFBbUI7Z0JBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBTSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7b0NBQy9FLHFCQUFNLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUE7O2dDQUE3QyxTQUE2QyxDQUFDOzs7O3FCQUNoRCxDQUFDLENBQUM7Ozs7S0FDTjtJQU1EOztPQUVHO0lBQ1UsMkJBQU0sR0FBbkIsVUFBb0IsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7Ozs7O3dCQUMzRCxLQUFLLEdBQUcsU0FBUyxDQUFDOzs7O3dCQUdWLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF4QyxLQUFLLEdBQUcsU0FBZ0MsQ0FBQzs7Ozt3QkFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOzs7d0JBR3BELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs0QkFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ1YsSUFBSSxDQUFDO2dDQUNILE9BQU8sRUFBRSxTQUFTO2dDQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0NBQ2pCLEtBQUssRUFBRSxLQUFLOzZCQUNmLENBQUMsQ0FBQzt5QkFDVjs2QkFBTTs0QkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQ0FDVixJQUFJLENBQUM7Z0NBQ0YsT0FBTyxFQUFFLFNBQVM7Z0NBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtnQ0FDbEIsS0FBSyxFQUFFLEtBQUs7NkJBQ2YsQ0FBQyxDQUFDO3lCQUNWOzs7OztLQUNKO0lBRUQ7O09BRUc7SUFDVSwyQkFBTSxHQUFuQixVQUFvQixHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7d0JBRTNELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7Ozt3QkFLcEIscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUR6QyxnQ0FBZ0M7d0JBQ2hDLElBQUksR0FBRyxTQUFrQyxDQUFDOzs7O3dCQUUxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Ozt3QkFHOUMsSUFBSSxJQUFJLEVBQUU7NEJBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ1YsSUFBSSxDQUFDO2dDQUNGLE9BQU8sRUFBRSxTQUFTO2dDQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0NBQ2xCLElBQUksTUFBQTs2QkFDUCxDQUFDLENBQUM7eUJBQ1Y7NkJBQU07NEJBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ1YsSUFBSSxDQUFDO2dDQUNGLE9BQU8sRUFBRSxrQ0FBa0M7Z0NBQzNDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTs2QkFDckIsQ0FBQyxDQUFDO3lCQUNWOzs7OztLQUNKO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBbEZELElBa0ZDO0FBbEZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb259IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgVXNlckRhbyB9IGZyb20gXCIuLi9kYW9zL3VzZXJEYW9cIlxuXG5leHBvcnQgY2xhc3MgVXNlclJvdXRlciB7XG4gICAgLy8gdXNlZCB0byBhY2Nlc3MgZGF0YWJhc2VcbiAgICBwcml2YXRlIHVzZXJEYW8gOiBVc2VyRGFvO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9sb2dcbiAgICAgICAgY29uc29sZS5sb2coXCJbVXNlclJvdXRlOjpjcmVhdGVdIENyZWF0aW5nIFVzZXJSb3V0ZSByb3V0ZS5cIik7XG5cbiAgICAgICAgLy9hZGQgZ2V0QWxsIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvdXNlcnNcIiwgYXN5bmMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBVc2VyUm91dGVyKCkuZ2V0QWxsKHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGdldE9uZSByb3V0ZVxuICAgICAgICByb3V0ZXIuZ2V0KFwiL3VzZXJzLzp1c2VySURcIiwgYXN5bmMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgYXdhaXQgbmV3IFVzZXJSb3V0ZXIoKS5nZXRPbmUocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51c2VyRGFvID0gbmV3IFVzZXJEYW8oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHRVQgYWxsIHVzZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRBbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHVzZXJzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1c2VycyA9IGF3YWl0IHRoaXMudXNlckRhby5nZXRBbGxVc2VycygpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm91dGVyOiBFcnJvciBnZXR0aW5nIGFsbCB1c2Vycy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHRVQgb25lIHVzZXIgYnkgaWQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldE9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICAvLyBQdWxsIHRoZSByZXF1ZXN0ZWQgaWQgb3V0LiAoZXguIGlmIHRoZSB1cmwgaXMgLi4uL3VzZXJzLzx1c2VySUQ+IHRoZW4gcXVlcnkgPSA8dXNlcklEPilcbiAgICAgICAgbGV0IHVzZXJJRCA9IHJlcS5wYXJhbXMudXNlcklEO1xuICAgICAgICBsZXQgdXNlcjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU2VuZCB0aGUgcXVlcnkgdG8gdGhlIHVzZXJEYW9cbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJEYW8uZ2V0VXNlcih1c2VySUQpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm91dGVyOiBlcnJvciBnZXR0aW5nIHVzZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXNlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gaGVybyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBpZC4nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=