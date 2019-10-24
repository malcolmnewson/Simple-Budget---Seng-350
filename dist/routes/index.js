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
                                http.get("http://localhost:3000/users", function (res) { return __awaiter(_this, void 0, void 0, function () {
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
                                }); });
                            })];
                    case 1:
                        apiResponse = _b.sent();
                        console.log("api response: " + apiResponse);
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
        var purchases = { purchase1: purchase1, purchase2: purchase2 };
        var options = {
            purchases: purchases
        };
        this.render(req, res, "purchases", options);
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlDQUFrQztBQUNsQyx5Q0FBNkI7QUFHN0I7Ozs7R0FJRztBQUNIO0lBQWdDLDhCQUFTO0lBd0JyQzs7Ozs7T0FLRztJQUNIO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBOUJEOzs7Ozs7T0FNRztJQUNXLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUUxRCxxQkFBcUI7UUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQzVELElBQUksVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxvQkFBb0I7UUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtZQUNyQyxJQUFJLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBWUQ7Ozs7Ozs7O09BUUc7SUFDVSwwQkFBSyxHQUFsQixVQUFtQixHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOzs7Ozs7O3dCQUM5RCxrQkFBa0I7d0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQXVCLENBQUM7d0JBRWpDLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ0kscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxVQUFPLEdBQUc7Ozs7Z0RBQzlDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUEsS0FBSztvREFDaEIsSUFBSSxJQUFJLEtBQUssQ0FBQztnREFDbEIsQ0FBQyxDQUFDLENBQUM7Z0RBQ0gscUJBQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7d0RBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dEQUMvQixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0RBQ3pCLENBQUMsQ0FBQyxFQUFBOztnREFIRixTQUdFLENBQUE7Ozs7cUNBQ0wsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FBQyxFQUFBOzt3QkFWRSxXQUFXLEdBQUcsU0FVaEI7d0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsQ0FBQzt3QkFFdEMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsV0FBMkMsRUFBMUIsS0FBQyxXQUFtQixDQUFDLEtBQUssRUFBMUIsY0FBMEIsRUFBMUIsSUFBMEIsRUFBRTs0QkFBcEMsSUFBSTs0QkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDN0I7d0JBR0csT0FBTyxHQUFXOzRCQUNsQixTQUFTLEVBQUUsMkJBQTJCOzRCQUN0QyxjQUFjLEVBQUUsNENBQTRDOzRCQUM1RCxPQUFPLEVBQUUsT0FBTzt5QkFDbkIsQ0FBQzt3QkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVyQixpQkFBaUI7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7O0tBTzNDO0lBRU8sOEJBQVMsR0FBakIsVUFBa0IsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUc1QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdNQUFnTSxDQUFDLENBQUM7UUFDN04sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw4TEFBOEwsQ0FBQyxDQUFDO1FBRTNOLElBQUksU0FBUyxHQUFHLEVBQUMsU0FBUyxXQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUMsQ0FBQztRQUV2QyxJQUFJLE9BQU8sR0FBVztZQUNsQixTQUFTLEVBQUUsU0FBUztTQUV2QixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUUvQyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBdkdELENBQWdDLGlCQUFTLEdBdUd4QztBQXZHWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtCYXNlUm91dGV9IGZyb20gXCIuL3JvdXRlXCI7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5cblxuLyoqXG4gKiAvIHJvdXRlXG4gKlxuICogQGNsYXNzIEluZGV4Um91dGVcbiAqL1xuZXhwb3J0IGNsYXNzIEluZGV4Um91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSByb3V0ZXMuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vbG9nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0luZGV4Um91dGU6OmNyZWF0ZV0gQ3JlYXRpbmcgaW5kZXggcm91dGUuXCIpO1xuXG4gICAgICAgIC8vYWRkIGhvbWUgcGFnZSByb3V0ZVxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1wiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG5ldyBJbmRleFJvdXRlKCkuaW5kZXgocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FkZCBwdXJjaGFzZXMgcGFnZVxuICAgICAgICByb3V0ZXIuZ2V0KFwiL3B1cmNoYXNlc1wiLCAoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICBuZXcgSW5kZXhSb3V0ZSgpLnB1cmNoYXNlcyhyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBob21lIHBhZ2Ugcm91dGUuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBtZXRob2QgaW5kZXhcbiAgICAgKiBAcGFyYW0gcmVxIHtSZXF1ZXN0fSBUaGUgZXhwcmVzcyBSZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gcmVzIHtSZXNwb25zZX0gVGhlIGV4cHJlc3MgUmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqIEBuZXh0IHtOZXh0RnVuY3Rpb259IEV4ZWN1dGUgdGhlIG5leHQgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbmRleChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICAvL3NldCBjdXN0b20gdGl0bGVcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiQnVkZ2V0IEFwcCB8IFdlbGNvbWUhXCI7XG5cbiAgICAgICAgbGV0IGRhdGEgPSBcIlwiO1xuICAgICAgICBsZXQgYXBpUmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vyc1wiLCBhc3luYyAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLm9uKFwiZGF0YVwiLCBjaHVuayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgKz0gY2h1bms7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXBpUmVzcG9uc2UgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFwaVJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBpIHJlc3BvbnNlOiBcIiArIGFwaVJlc3BvbnNlKTtcblxuICAgICAgICBjb25zdCB1c2VySURzID0gW107XG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgKGFwaVJlc3BvbnNlIGFzIGFueSkudXNlcnMpIHtcbiAgICAgICAgICAgIHVzZXJJRHMucHVzaCh1c2VyLnVzZXJJRCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCBtZXNzYWdlXG4gICAgICAgIGxldCBvcHRpb25zOiBPYmplY3QgPSB7XG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJXZWxjb21lIHRvIFVWaWMgU2VuZyAzNTAhXCIsXG4gICAgICAgICAgICBcImluc3RydWN0aW9uc1wiOiBcIlNlbGVjdCB5b3VyIHVzZXIgSUQgdG8gdmlldyB5b3VyIHB1cmNoYXNlc1wiLFxuICAgICAgICAgICAgXCJ1c2Vyc1wiOiB1c2VySURzXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG5cbiAgICAgICAgLy9yZW5kZXIgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5yZW5kZXIocmVxLCByZXMsIFwiaW5kZXhcIiwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy90aGlzLnJlbmRlcihyZXEsIHJlcywgXCJwdXJjaGFzZXNcIik7XG5cblxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHB1cmNoYXNlcyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJNeSBQdXJjaGFzZXNcIjtcblxuXG4gICAgICAgIHZhciBwdXJjaGFzZTEgPSBKU09OLnBhcnNlKCd7XCJfaWRcIjp7XCIkb2lkXCI6XCI1ZGFlMTJlNDFjOWQ0NDAwMDA5ODdjYWFcIn0sXCJ1c2VySURcIjpcIm1hbGNvbG1uZXdzb25cIixcImNhdGVnb3J5XCI6XCJGb29kXCIsXCJjb3N0XCI6e1wiJG51bWJlckRvdWJsZVwiOlwiMjAuOThcIn0sXCJkYXRlXCI6e1wiJGRhdGVcIjp7XCIkbnVtYmVyTG9uZ1wiOlwiMTU0NjM0NDAwMDAwMFwifX0sXCJkZXNjcmlwdGlvblwiOlwiU25hY2tcIn0nKTtcbiAgICAgICAgdmFyIHB1cmNoYXNlMiA9IEpTT04ucGFyc2UoJ3tcIl9pZFwiOntcIiRvaWRcIjpcIjVkYWUxNWMyMWM5ZDQ0MDAwMDk4N2NhY1wifSxcInVzZXJJRFwiOlwibWFsY29sbW5ld3NvblwiLFwiY2F0ZWdvcnlcIjpcIkZvb2RcIixcImNvc3RcIjp7XCIkbnVtYmVyRG91YmxlXCI6XCIxMlwifSxcImRhdGVcIjp7XCIkZGF0ZVwiOntcIiRudW1iZXJMb25nXCI6XCIxNTQ2MzQ0MDAwMDAwXCJ9fSxcImRlc2NyaXB0aW9uXCI6XCJkaW5uZXJcIn0nKTtcblxuICAgICAgICB2YXIgcHVyY2hhc2VzID0ge3B1cmNoYXNlMSwgcHVyY2hhc2UyfTtcblxuICAgICAgICBsZXQgb3B0aW9uczogT2JqZWN0ID0ge1xuICAgICAgICAgICAgcHVyY2hhc2VzOiBwdXJjaGFzZXNcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVuZGVyKHJlcSwgcmVzLCBcInB1cmNoYXNlc1wiLCBvcHRpb25zKVxuXG4gICAgfVxufSJdfQ==