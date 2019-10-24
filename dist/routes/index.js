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
        //add purchases page
        router.get("/purchases", (function (req, res, next) {
            new IndexRoute().purchases(req, res, next);
        }));
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
            var data, apiResponse, userIDs, _i, _a, user, options;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //set custom title
                        this.title = "Budget App | Welcome!";
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
                        apiResponse = _b.sent();
                        userIDs = [];
                        for (_i = 0, _a = apiResponse.users; _i < _a.length; _i++) {
                            user = _a[_i];
                            userIDs.push(user.userID);
                        }
                        options = {
                            "message": "Welcome to UVic Seng 350!",
                            "instructions": "Select your user ID to view your purchases",
                            "users": userIDs
                        };
                        console.log(options);
                        //render template
                        this.render(req, res, "index", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexRoute.prototype.purchases = function (req, res, next) {
        this.title = "My Purchases";
        var purchase1 = JSON.parse('{"_id":{"$oid":"5dae12e41c9d440000987caa"},"userID":"malcolmnewson","category":"Food","cost":{"$numberDouble":"20.98"},"date":{"$date":{"$numberLong":"1546344000000"}},"description":"Snack"}');
        var purchase2 = JSON.parse('{"_id":{"$oid":"5dae15c21c9d440000987cac"},"userID":"malcolmnewson","category":"Food","cost":{"$numberDouble":"12"},"date":{"$date":{"$numberLong":"1546344000000"}},"description":"dinner"}');
        var purchases = {purchase1: purchase1, purchase2: purchase2};
        var options = {
            purchases: purchases
        };
        this.render(req, res, "purchases", options);
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlDQUFvQztBQUNwQyx5Q0FBNkI7QUFHN0I7Ozs7R0FJRztBQUNIO0lBQWdDLDhCQUFTO0lBd0JyQzs7Ozs7T0FLRztJQUNIO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBOUJEOzs7Ozs7T0FNRztJQUNXLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUUxRCxxQkFBcUI7UUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQzVELElBQUksVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtZQUNyQyxJQUFJLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBWUQ7Ozs7Ozs7O09BUUc7SUFDVSwwQkFBSyxHQUFsQixVQUFtQixHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7O3dCQUM5RCxrQkFBa0I7d0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUM7d0JBRWpDLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ0kscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxVQUFPLEdBQUc7Ozs7Z0RBQzlDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSztvREFDaEIsSUFBSSxJQUFJLEtBQUssQ0FBQztnREFDbEIsQ0FBQyxDQUFDLENBQUM7Z0RBQ0gscUJBQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7d0RBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0RBQ3pCLENBQUMsQ0FBQyxFQUFBOztnREFIRixTQUdFLENBQUE7Ozs7cUNBQ0wsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxFQUFBOzt3QkFWRSxXQUFXLEdBQUcsU0FVaEI7d0JBRUksT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsV0FBMkMsRUFBMUIsS0FBQyxXQUFtQixDQUFDLEtBQUssRUFBMUIsY0FBMEIsRUFBMUIsSUFBMEIsRUFBRTs0QkFBcEMsSUFBSTs0QkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDN0I7d0JBR0csT0FBTyxHQUFXOzRCQUNsQixTQUFTLEVBQUUsMkJBQTJCOzRCQUN0QyxjQUFjLEVBQUUsNENBQTRDOzRCQUM1RCxPQUFPLEVBQUUsT0FBTzt5QkFDbkIsQ0FBQzt3QkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVyQixpQkFBaUI7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7O0tBTzNDO0lBRU8sOEJBQVMsR0FBakIsVUFBa0IsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUc1QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdNQUFnTSxDQUFDLENBQUM7UUFDN04sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw4TEFBOEwsQ0FBQyxDQUFDO1FBRTNOLElBQUksU0FBUyxHQUFHLEVBQUMsU0FBUyxXQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQztRQUV2QyxJQUFJLE9BQU8sR0FBVztZQUNsQixTQUFTLEVBQUcsU0FBUztTQUV4QixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUUvQyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBckdELENBQWdDLGlCQUFTLEdBcUd4QztBQXJHWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7TmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vcm91dGVcIjtcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcblxuXG4vKipcbiAqIC8gcm91dGVcbiAqXG4gKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICovXG5leHBvcnQgY2xhc3MgSW5kZXhSb3V0ZSBleHRlbmRzIEJhc2VSb3V0ZSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIHJvdXRlcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBJbmRleFJvdXRlXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9sb2dcbiAgICAgICAgY29uc29sZS5sb2coXCJbSW5kZXhSb3V0ZTo6Y3JlYXRlXSBDcmVhdGluZyBpbmRleCByb3V0ZS5cIik7XG5cbiAgICAgICAgLy9hZGQgaG9tZSBwYWdlIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEluZGV4Um91dGUoKS5pbmRleChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vYWRkIHB1cmNoYXNlcyBwYWdlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvcHVyY2hhc2VzXCIsICgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgICAgIG5ldyBJbmRleFJvdXRlKCkucHVyY2hhc2VzKHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBjbGFzcyBJbmRleFJvdXRlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGhvbWUgcGFnZSByb3V0ZS5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBJbmRleFJvdXRlXG4gICAgICogQG1ldGhvZCBpbmRleFxuICAgICAqIEBwYXJhbSByZXEge1JlcXVlc3R9IFRoZSBleHByZXNzIFJlcXVlc3Qgb2JqZWN0LlxuICAgICAqIEBwYXJhbSByZXMge1Jlc3BvbnNlfSBUaGUgZXhwcmVzcyBSZXNwb25zZSBvYmplY3QuXG4gICAgICogQG5leHQge05leHRGdW5jdGlvbn0gRXhlY3V0ZSB0aGUgbmV4dCBtZXRob2QuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGluZGV4KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vc2V0IGN1c3RvbSB0aXRsZVxuICAgICAgICB0aGlzLnRpdGxlID0gXCJCdWRnZXQgQXBwIHwgV2VsY29tZSFcIjtcblxuICAgICAgICBsZXQgZGF0YSA9IFwiXCI7XG4gICAgICAgIGxldCBhcGlSZXNwb25zZSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzXCIsIGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXMub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSArPSBjaHVuaztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXMub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcGlSZXNwb25zZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXBpUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlcklEcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIChhcGlSZXNwb25zZSBhcyBhbnkpLnVzZXJzKSB7XG4gICAgICAgICAgICB1c2VySURzLnB1c2godXNlci51c2VySUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXQgbWVzc2FnZVxuICAgICAgICBsZXQgb3B0aW9uczogT2JqZWN0ID0ge1xuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiV2VsY29tZSB0byBVVmljIFNlbmcgMzUwIVwiLFxuICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnNcIjogXCJTZWxlY3QgeW91ciB1c2VyIElEIHRvIHZpZXcgeW91ciBwdXJjaGFzZXNcIixcbiAgICAgICAgICAgIFwidXNlcnNcIjogdXNlcklEc1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuXG4gICAgICAgIC8vcmVuZGVyIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucmVuZGVyKHJlcSwgcmVzLCBcImluZGV4XCIsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vdGhpcy5yZW5kZXIocmVxLCByZXMsIFwicHVyY2hhc2VzXCIpO1xuXG5cblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdXJjaGFzZXMocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiTXkgUHVyY2hhc2VzXCI7XG5cblxuICAgICAgICB2YXIgcHVyY2hhc2UxID0gSlNPTi5wYXJzZSgne1wiX2lkXCI6e1wiJG9pZFwiOlwiNWRhZTEyZTQxYzlkNDQwMDAwOTg3Y2FhXCJ9LFwidXNlcklEXCI6XCJtYWxjb2xtbmV3c29uXCIsXCJjYXRlZ29yeVwiOlwiRm9vZFwiLFwiY29zdFwiOntcIiRudW1iZXJEb3VibGVcIjpcIjIwLjk4XCJ9LFwiZGF0ZVwiOntcIiRkYXRlXCI6e1wiJG51bWJlckxvbmdcIjpcIjE1NDYzNDQwMDAwMDBcIn19LFwiZGVzY3JpcHRpb25cIjpcIlNuYWNrXCJ9Jyk7XG4gICAgICAgIHZhciBwdXJjaGFzZTIgPSBKU09OLnBhcnNlKCd7XCJfaWRcIjp7XCIkb2lkXCI6XCI1ZGFlMTVjMjFjOWQ0NDAwMDA5ODdjYWNcIn0sXCJ1c2VySURcIjpcIm1hbGNvbG1uZXdzb25cIixcImNhdGVnb3J5XCI6XCJGb29kXCIsXCJjb3N0XCI6e1wiJG51bWJlckRvdWJsZVwiOlwiMTJcIn0sXCJkYXRlXCI6e1wiJGRhdGVcIjp7XCIkbnVtYmVyTG9uZ1wiOlwiMTU0NjM0NDAwMDAwMFwifX0sXCJkZXNjcmlwdGlvblwiOlwiZGlubmVyXCJ9Jyk7XG5cbiAgICAgICAgdmFyIHB1cmNoYXNlcyA9IHtwdXJjaGFzZTEsIHB1cmNoYXNlMn07XG5cbiAgICAgICAgbGV0IG9wdGlvbnM6IE9iamVjdCA9IHtcbiAgICAgICAgICAgIHB1cmNoYXNlcyA6IHB1cmNoYXNlc1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW5kZXIocmVxLCByZXMsIFwicHVyY2hhc2VzXCIsIG9wdGlvbnMpXG5cbiAgICB9XG59Il19