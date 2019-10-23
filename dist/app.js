"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var index_1 = require("./routes/index");
var userRouter_1 = require("./routes/userRouter");
/**
 * The server.
 *
 * @class Server
 */
var Server = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    function Server() {
        //create express.js application
        this.app = express_1.default();
        //configure application
        this.config();
        //add routes
        this.routes();
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    Server.prototype.config = function () {
        //add static paths
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        //configure pug
        this.app.set("../views", path_1.default.join(__dirname, "../views"));
        this.app.set("view engine", "pug");
        //mount logger
        this.app.use(morgan_1.default("dev"));
        //mount json form parser
        this.app.use(body_parser_1.default.json());
        //mount query string parser
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
        //mount cookie parser middleware
        this.app.use(cookie_parser_1.default("SECRET_GOES_HERE"));
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorhandler_1.default());
    };
    /**
     * Create and return Router.
     *
     * @class Server
     * @method routes
     * @return void
     */
    Server.prototype.routes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var router;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        router = express_1.default.Router();
                        index_1.IndexRoute.create(router);
                        return [4 /*yield*/, userRouter_1.UserRouter.create(router)];
                    case 1:
                        _a.sent();
                        //use router middleware
                        this.app.use(router);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQXFDO0FBQ3JDLGdFQUF5QztBQUN6QyxvREFBOEI7QUFDOUIsa0RBQTRCO0FBQzVCLDhDQUF3QjtBQUN4Qiw4REFBd0M7QUFDeEMsd0NBQTRDO0FBQzVDLGtEQUFpRDtBQUVqRDs7OztHQUlHO0FBQ0g7SUFnQkk7Ozs7O09BS0c7SUFDSDtRQUNJLCtCQUErQjtRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztRQUVyQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsWUFBWTtRQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBM0JEOzs7Ozs7O09BT0c7SUFDVyxnQkFBUyxHQUF2QjtRQUNJLE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbUJEOzs7OztPQUtHO0lBQ0ksdUJBQU0sR0FBYjtRQUNJLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsZUFBZTtRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVuQyxjQUFjO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTVCLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFaEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDO1lBQy9CLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUosZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRS9DLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQVEsRUFBRSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7WUFDbkcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLHVCQUFNLEdBQXBCOzs7Ozs7d0JBRUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBRTFCLGtCQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQixxQkFBTSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBRWhDLHVCQUF1Qjt3QkFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0tBQ3hCO0lBRUwsYUFBQztBQUFELENBQUMsQUF6RkQsSUF5RkM7QUF6Rlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImVycm9yaGFuZGxlclwiO1xuaW1wb3J0IHsgSW5kZXhSb3V0ZSB9IGZyb20gXCIuL3JvdXRlcy9pbmRleFwiO1xuaW1wb3J0IHsgVXNlclJvdXRlciB9IGZyb20gXCIuL3JvdXRlcy91c2VyUm91dGVyXCI7XG5cbi8qKlxuICogVGhlIHNlcnZlci5cbiAqXG4gKiBAY2xhc3MgU2VydmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuXG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEJvb3RzdHJhcCB0aGUgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCBib290c3RyYXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7bmcuYXV0by5JSW5qZWN0b3JTZXJ2aWNlfSBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIGluamVjdG9yIGZvciB0aGlzIGFwcC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiBTZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2NyZWF0ZSBleHByZXNzLmpzIGFwcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuXG4gICAgICAgIC8vY29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuY29uZmlnKCk7XG5cbiAgICAgICAgLy9hZGQgcm91dGVzXG4gICAgICAgIHRoaXMucm91dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCBjb25maWdcbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZmlnKCkge1xuICAgICAgICAvL2FkZCBzdGF0aWMgcGF0aHNcbiAgICAgICAgdGhpcy5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIFwicHVibGljXCIpKSk7XG5cbiAgICAgICAgLy9jb25maWd1cmUgcHVnXG4gICAgICAgIHRoaXMuYXBwLnNldChcIi4uL3ZpZXdzXCIsIHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vdmlld3NcIikpO1xuICAgICAgICB0aGlzLmFwcC5zZXQoXCJ2aWV3IGVuZ2luZVwiLCBcInB1Z1wiKTtcblxuICAgICAgICAvL21vdW50IGxvZ2dlclxuICAgICAgICB0aGlzLmFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcblxuICAgICAgICAvL21vdW50IGpzb24gZm9ybSBwYXJzZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuICAgICAgICAvL21vdW50IHF1ZXJ5IHN0cmluZyBwYXJzZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy9tb3VudCBjb29raWUgcGFyc2VyIG1pZGRsZXdhcmVcbiAgICAgICAgdGhpcy5hcHAudXNlKGNvb2tpZVBhcnNlcihcIlNFQ1JFVF9HT0VTX0hFUkVcIikpO1xuXG4gICAgICAgIC8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgdGhpcy5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHJldHVybiBSb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCByb3V0ZXNcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHJvdXRlcygpIHtcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gICAgICAgIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAgICAgSW5kZXhSb3V0ZS5jcmVhdGUocm91dGVyKTtcbiAgICAgICAgYXdhaXQgVXNlclJvdXRlci5jcmVhdGUocm91dGVyKTtcblxuICAgICAgICAvL3VzZSByb3V0ZXIgbWlkZGxld2FyZVxuICAgICAgICB0aGlzLmFwcC51c2Uocm91dGVyKTtcbiAgICB9XG5cbn1cbiJdfQ==