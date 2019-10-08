"use strict";
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
var heroRouter_1 = require("./routes/heroRouter");
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
        //create expressjs application
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
        var router;
        router = express_1.default.Router();
        index_1.IndexRoute.create(router);
        heroRouter_1.HeroRouter.create(router);
        //use router middleware
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDREQUFxQztBQUNyQyxnRUFBeUM7QUFDekMsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUM1Qiw4Q0FBd0I7QUFDeEIsOERBQXdDO0FBQ3hDLHdDQUE0QztBQUM1QyxrREFBZ0Q7QUFFaEQ7Ozs7R0FJRztBQUNIO0lBZ0JJOzs7OztPQUtHO0lBQ0g7UUFDSSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFFckIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQTNCRDs7Ozs7OztPQU9HO0lBQ1csZ0JBQVMsR0FBdkI7UUFDSSxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQW1CRDs7Ozs7T0FLRztJQUNJLHVCQUFNLEdBQWI7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELGVBQWU7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkMsY0FBYztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU1Qix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQztZQUMvQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUMsQ0FBQztRQUVKLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUUvQyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ25HLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1QkFBTSxHQUFkO1FBQ0ksSUFBSSxNQUFzQixDQUFDO1FBQzNCLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLGtCQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLHVCQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6QixDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImVycm9yaGFuZGxlclwiO1xuaW1wb3J0IHsgSW5kZXhSb3V0ZSB9IGZyb20gXCIuL3JvdXRlcy9pbmRleFwiO1xuaW1wb3J0IHsgSGVyb1JvdXRlcn0gZnJvbSBcIi4vcm91dGVzL2hlcm9Sb3V0ZXJcIjtcblxuLyoqXG4gKiBUaGUgc2VydmVyLlxuICpcbiAqIEBjbGFzcyBTZXJ2ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG5cbiAgICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gICAgLyoqXG4gICAgICogQm9vdHN0cmFwIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBTZXJ2ZXJcbiAgICAgKiBAbWV0aG9kIGJvb3RzdHJhcFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcmV0dXJuIHtuZy5hdXRvLklJbmplY3RvclNlcnZpY2V9IFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgaW5qZWN0b3IgZm9yIHRoaXMgYXBwLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYm9vdHN0cmFwKCk6IFNlcnZlciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vY3JlYXRlIGV4cHJlc3NqcyBhcHBsaWNhdGlvblxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcblxuICAgICAgICAvL2NvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgICAgICB0aGlzLmNvbmZpZygpO1xuXG4gICAgICAgIC8vYWRkIHJvdXRlc1xuICAgICAgICB0aGlzLnJvdXRlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBtZXRob2QgY29uZmlnXG4gICAgICovXG4gICAgcHVibGljIGNvbmZpZygpIHtcbiAgICAgICAgLy9hZGQgc3RhdGljIHBhdGhzXG4gICAgICAgIHRoaXMuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBcInB1YmxpY1wiKSkpO1xuXG4gICAgICAgIC8vY29uZmlndXJlIHB1Z1xuICAgICAgICB0aGlzLmFwcC5zZXQoXCIuLi92aWV3c1wiLCBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3ZpZXdzXCIpKTtcbiAgICAgICAgdGhpcy5hcHAuc2V0KFwidmlldyBlbmdpbmVcIiwgXCJwdWdcIik7XG5cbiAgICAgICAgLy9tb3VudCBsb2dnZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XG5cbiAgICAgICAgLy9tb3VudCBqc29uIGZvcm0gcGFyc2VyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICAgICAgLy9tb3VudCBxdWVyeSBzdHJpbmcgcGFyc2VyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgICAgICAgICAgZXh0ZW5kZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vbW91bnQgY29va2llIHBhcnNlciBtaWRkbGV3YXJlXG4gICAgICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoXCJTRUNSRVRfR09FU19IRVJFXCIpKTtcblxuICAgICAgICAvLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24oZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBlcnIuc3RhdHVzID0gNDA0O1xuICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2Vycm9yIGhhbmRsaW5nXG4gICAgICAgIHRoaXMuYXBwLnVzZShlcnJvckhhbmRsZXIoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCByZXR1cm4gUm91dGVyLlxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBtZXRob2Qgcm91dGVzXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgcHJpdmF0ZSByb3V0ZXMoKSB7XG4gICAgICAgIGxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyO1xuICAgICAgICByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgICAgIEluZGV4Um91dGUuY3JlYXRlKHJvdXRlcik7XG4gICAgICAgIEhlcm9Sb3V0ZXIuY3JlYXRlKHJvdXRlcik7XG5cbiAgICAgICAgLy91c2Ugcm91dGVyIG1pZGRsZXdhcmVcbiAgICAgICAgdGhpcy5hcHAudXNlKHJvdXRlcik7XG5cbiAgICB9XG5cbn1cbiJdfQ==