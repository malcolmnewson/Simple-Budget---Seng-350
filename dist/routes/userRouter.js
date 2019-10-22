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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBRXpDO0lBbUJJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBakJtQixpQkFBTSxHQUExQixVQUEyQixNQUFjOzs7O2dCQUNyQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztnQkFFN0Qsa0JBQWtCO2dCQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFNLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7OztvQ0FDdEUscUJBQU0sSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBQTs7Z0NBQTdDLFNBQTZDLENBQUM7Ozs7cUJBQ2pELENBQUMsQ0FBQztnQkFFSCxtQkFBbUI7Z0JBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBTSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7b0NBQy9FLHFCQUFNLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUE7O2dDQUE3QyxTQUE2QyxDQUFDOzs7O3FCQUNoRCxDQUFDLENBQUM7Ozs7S0FDTjtJQU1EOztPQUVHO0lBQ1UsMkJBQU0sR0FBbkIsVUFBb0IsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7Ozs7O3dCQUMzRCxLQUFLLEdBQUcsU0FBUyxDQUFDOzs7O3dCQUdWLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF4QyxLQUFLLEdBQUcsU0FBZ0MsQ0FBQzs7Ozt3QkFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOzs7d0JBR3BELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs0QkFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ1YsSUFBSSxDQUFDO2dDQUNILE9BQU8sRUFBRSxTQUFTO2dDQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0NBQ2xCLEtBQUssT0FBQTs2QkFDUCxDQUFDLENBQUM7eUJBQ1Y7NkJBQU07NEJBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUNBQ1YsSUFBSSxDQUFDO2dDQUNGLE9BQU8sRUFBRSxTQUFTO2dDQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07Z0NBQ2xCLEtBQUssT0FBQTs2QkFDUixDQUFDLENBQUM7eUJBQ1Y7Ozs7O0tBQ0o7SUFFRDs7T0FFRztJQUNVLDJCQUFNLEdBQW5CLFVBQW9CLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7Ozs7Ozt3QkFFM0QsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzs7O3dCQUtwQixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBRHpDLGdDQUFnQzt3QkFDaEMsSUFBSSxHQUFHLFNBQWtDLENBQUM7Ozs7d0JBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7O3dCQUc5QyxJQUFJLElBQUksRUFBRTs0QkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQ0FDVixJQUFJLENBQUM7Z0NBQ0YsT0FBTyxFQUFFLFNBQVM7Z0NBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtnQ0FDbEIsSUFBSSxNQUFBOzZCQUNQLENBQUMsQ0FBQzt5QkFDVjs2QkFBTTs0QkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQ0FDVixJQUFJLENBQUM7Z0NBQ0YsT0FBTyxFQUFFLGtDQUFrQztnQ0FDM0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNOzZCQUNyQixDQUFDLENBQUM7eUJBQ1Y7Ozs7O0tBQ0o7SUFDTCxpQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7QUFsRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyRGFvIH0gZnJvbSBcIi4uL2Rhb3MvdXNlckRhb1wiXG5cbmV4cG9ydCBjbGFzcyBVc2VyUm91dGVyIHtcbiAgICAvLyB1c2VkIHRvIGFjY2VzcyBkYXRhYmFzZVxuICAgIHByaXZhdGUgdXNlckRhbyA6IFVzZXJEYW87XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZShyb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvL2xvZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIltVc2VyUm91dGU6OmNyZWF0ZV0gQ3JlYXRpbmcgVXNlclJvdXRlIHJvdXRlLlwiKTtcblxuICAgICAgICAvL2FkZCBnZXRBbGwgcm91dGVcbiAgICAgICAgcm91dGVyLmdldChcIi91c2Vyc1wiLCBhc3luYyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgYXdhaXQgbmV3IFVzZXJSb3V0ZXIoKS5nZXRBbGwocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgZ2V0T25lIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvdXNlcnMvOnVzZXJJRFwiLCBhc3luYyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICBhd2FpdCBuZXcgVXNlclJvdXRlcigpLmdldE9uZShyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXJEYW8gPSBuZXcgVXNlckRhbygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdFVCBhbGwgdXNlcnMuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICBsZXQgdXNlcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXJzID0gYXdhaXQgdGhpcy51c2VyRGFvLmdldEFsbFVzZXJzKCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb3V0ZXI6IEVycm9yIGdldHRpbmcgYWxsIHVzZXJzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICB1c2Vyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdFVCBvbmUgdXNlciBieSBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0T25lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIFB1bGwgdGhlIHJlcXVlc3RlZCBpZCBvdXQuIChleC4gaWYgdGhlIHVybCBpcyAuLi4vdXNlcnMvPHVzZXJJRD4gdGhlbiBxdWVyeSA9IDx1c2VySUQ+KVxuICAgICAgICBsZXQgdXNlcklEID0gcmVxLnBhcmFtcy51c2VySUQ7XG4gICAgICAgIGxldCB1c2VyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBxdWVyeSB0byB0aGUgdXNlckRhb1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IHRoaXMudXNlckRhby5nZXRVc2VyKHVzZXJJRCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSb3V0ZXI6IGVycm9yIGdldHRpbmcgdXNlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBoZXJvIGZvdW5kIHdpdGggdGhlIGdpdmVuIGlkLicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==