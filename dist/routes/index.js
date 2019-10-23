"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
var http = __importStar(require("http"));
/**
 * / route
 *
 * @class IndexRoute
 */
var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function IndexRoute() {
        return _super.call(this) || this;
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    IndexRoute.create = function (router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");
        //add home page route
        router.get("/", function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    IndexRoute.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, apiResponse, userObject, options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set custom title
                        this.title = "Budget App | This is the main page";
                        data = "";
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                            http.get("http://localhost:3000/users", function (res) {
                                return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                res.on("data", function (chunk) {
                                                    data += chunk;
                                                });
                                                return [4 /*yield*/, res.on("end", function () {
                                                    apiResponse = JSON.parse(data);
                                                    resolve(apiResponse);
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                        })];
                    case 1:
                        apiResponse = _a.sent();
                        console.log("apiResponse: " + apiResponse.users[0].userID);
                        console.log(typeof apiResponse);
                        options = {
                            "message": "Welcome to UVic Seng 350!",
                            "bonus": "Hello World",
                            "users": apiResponse
                        };
                        console.log(options);
                        //render template
                        this.render(req, res, "index", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlDQUFvQztBQUdwQyx5Q0FBNkI7QUFHN0I7Ozs7R0FJRztBQUNIO0lBQWdDLDhCQUFTO0lBbUJyQzs7Ozs7T0FLRztJQUNIO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBekJEOzs7Ozs7T0FNRztJQUNXLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUUxRCxxQkFBcUI7UUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQzVELElBQUksVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWUQ7Ozs7Ozs7O09BUUc7SUFDVSwwQkFBSyxHQUFsQixVQUFtQixHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7O3dCQUM5RCxrQkFBa0I7d0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsb0NBQW9DLENBQUM7d0JBRzlDLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ0kscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxVQUFPLEdBQUc7Ozs7Z0RBQzlDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSztvREFDaEIsSUFBSSxJQUFJLEtBQUssQ0FBQztnREFDbEIsQ0FBQyxDQUFDLENBQUM7Z0RBQ0gscUJBQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7d0RBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0RBQ3pCLENBQUMsQ0FBQyxFQUFBOztnREFIRixTQUdFLENBQUE7Ozs7cUNBQ0wsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBRSxFQUFBOzt3QkFWQyxXQUFXLEdBQUcsU0FVZjt3QkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBSSxXQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxDQUFDO3dCQU01QixPQUFPLEdBQVc7NEJBQ2xCLFNBQVMsRUFBRSwyQkFBMkI7NEJBQ3RDLE9BQU8sRUFBRyxhQUFhOzRCQUN0QixPQUFPLEVBQUcsV0FBa0I7eUJBRWhDLENBQUM7d0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFckIsaUJBQWlCO3dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUczQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTdFRCxDQUFnQyxpQkFBUyxHQTZFeEM7QUE3RVksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBleHByZXNzLCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBCYXNlUm91dGUgfSBmcm9tIFwiLi9yb3V0ZVwiO1xuaW1wb3J0IHtVc2VyRGFvfSBmcm9tIFwiLi4vZGFvcy91c2VyRGFvXCI7XG5pbXBvcnQge1VzZXJSb3V0ZXJ9IGZyb20gXCIuL3VzZXJSb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcblxuXG4vKipcbiAqIC8gcm91dGVcbiAqXG4gKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICovXG5leHBvcnQgY2xhc3MgSW5kZXhSb3V0ZSBleHRlbmRzIEJhc2VSb3V0ZSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIHJvdXRlcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBJbmRleFJvdXRlXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9sb2dcbiAgICAgICAgY29uc29sZS5sb2coXCJbSW5kZXhSb3V0ZTo6Y3JlYXRlXSBDcmVhdGluZyBpbmRleCByb3V0ZS5cIik7XG5cbiAgICAgICAgLy9hZGQgaG9tZSBwYWdlIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEluZGV4Um91dGUoKS5pbmRleChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBob21lIHBhZ2Ugcm91dGUuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBtZXRob2QgaW5kZXhcbiAgICAgKiBAcGFyYW0gcmVxIHtSZXF1ZXN0fSBUaGUgZXhwcmVzcyBSZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gcmVzIHtSZXNwb25zZX0gVGhlIGV4cHJlc3MgUmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqIEBuZXh0IHtOZXh0RnVuY3Rpb259IEV4ZWN1dGUgdGhlIG5leHQgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbmRleChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICAvL3NldCBjdXN0b20gdGl0bGVcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiQnVkZ2V0IEFwcCB8IFRoaXMgaXMgdGhlIG1haW4gcGFnZVwiO1xuICAgICAgICAvL1xuXG4gICAgICAgIGxldCBkYXRhID0gXCJcIjtcbiAgICAgICAgbGV0IGFwaVJlc3BvbnNlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnNcIiwgYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlcy5vbihcImRhdGFcIiwgY2h1bmsgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhICs9IGNodW5rO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlcy5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFwaVJlc3BvbnNlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcGlSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhcGlSZXNwb25zZTogXCIgKyAoYXBpUmVzcG9uc2UgYXMgYW55KS51c2Vyc1swXS51c2VySUQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYXBpUmVzcG9uc2UpO1xuXG4gICAgICAgIGxldCB1c2VyT2JqZWN0XG5cblxuICAgICAgICAvL3NldCBtZXNzYWdlXG4gICAgICAgIGxldCBvcHRpb25zOiBPYmplY3QgPSB7XG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJXZWxjb21lIHRvIFVWaWMgU2VuZyAzNTAhXCIsXG4gICAgICAgICAgICBcImJvbnVzXCIgOiBcIkhlbGxvIFdvcmxkXCIsXG4gICAgICAgICAgICAgXCJ1c2Vyc1wiIDogYXBpUmVzcG9uc2UgYXMgYW55XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcblxuICAgICAgICAvL3JlbmRlciB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnJlbmRlcihyZXEsIHJlcywgXCJpbmRleFwiLCBvcHRpb25zKTtcblxuXG4gICAgfVxufSJdfQ==