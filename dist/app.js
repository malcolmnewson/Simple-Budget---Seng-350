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
        var router;
        router = express_1.default.Router();
        index_1.IndexRoute.create(router);
        userRouter_1.UserRouter.create(router);
        //use router middleware
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDREQUFxQztBQUNyQyxnRUFBeUM7QUFDekMsb0RBQThCO0FBQzlCLGtEQUE0QjtBQUM1Qiw4Q0FBd0I7QUFDeEIsOERBQXdDO0FBQ3hDLHdDQUE0QztBQUM1QyxrREFBaUQ7QUFFakQ7Ozs7R0FJRztBQUNIO0lBZ0JJOzs7OztPQUtHO0lBQ0g7UUFDSSwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFFckIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQTNCRDs7Ozs7OztPQU9HO0lBQ1csZ0JBQVMsR0FBdkI7UUFDSSxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQW1CRDs7Ozs7T0FLRztJQUNJLHVCQUFNLEdBQWI7UUFDSSxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELGVBQWU7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkMsY0FBYztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU1Qix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQztZQUMvQixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUMsQ0FBQztRQUVKLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUUvQyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ25HLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyx1QkFBTSxHQUFkO1FBQ0ksSUFBSSxNQUFzQixDQUFDO1FBQzNCLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLGtCQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLHVCQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6QixDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSBcImVycm9yaGFuZGxlclwiO1xuaW1wb3J0IHsgSW5kZXhSb3V0ZSB9IGZyb20gXCIuL3JvdXRlcy9pbmRleFwiO1xuaW1wb3J0IHsgVXNlclJvdXRlciB9IGZyb20gXCIuL3JvdXRlcy91c2VyUm91dGVyXCI7XG5cbi8qKlxuICogVGhlIHNlcnZlci5cbiAqXG4gKiBAY2xhc3MgU2VydmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuXG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICAgIC8qKlxuICAgICAqIEJvb3RzdHJhcCB0aGUgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCBib290c3RyYXBcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybiB7bmcuYXV0by5JSW5qZWN0b3JTZXJ2aWNlfSBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIGluamVjdG9yIGZvciB0aGlzIGFwcC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiBTZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2NyZWF0ZSBleHByZXNzLmpzIGFwcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuXG4gICAgICAgIC8vY29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgICAgIHRoaXMuY29uZmlnKCk7XG5cbiAgICAgICAgLy9hZGQgcm91dGVzXG4gICAgICAgIHRoaXMucm91dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCBjb25maWdcbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZmlnKCkge1xuICAgICAgICAvL2FkZCBzdGF0aWMgcGF0aHNcbiAgICAgICAgdGhpcy5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsIFwicHVibGljXCIpKSk7XG5cbiAgICAgICAgLy9jb25maWd1cmUgcHVnXG4gICAgICAgIHRoaXMuYXBwLnNldChcIi4uL3ZpZXdzXCIsIHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vdmlld3NcIikpO1xuICAgICAgICB0aGlzLmFwcC5zZXQoXCJ2aWV3IGVuZ2luZVwiLCBcInB1Z1wiKTtcblxuICAgICAgICAvL21vdW50IGxvZ2dlclxuICAgICAgICB0aGlzLmFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcblxuICAgICAgICAvL21vdW50IGpzb24gZm9ybSBwYXJzZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuICAgICAgICAvL21vdW50IHF1ZXJ5IHN0cmluZyBwYXJzZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy9tb3VudCBjb29raWUgcGFyc2VyIG1pZGRsZXdhcmVcbiAgICAgICAgdGhpcy5hcHAudXNlKGNvb2tpZVBhcnNlcihcIlNFQ1JFVF9HT0VTX0hFUkVcIikpO1xuXG4gICAgICAgIC8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbihlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgdGhpcy5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHJldHVybiBSb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCByb3V0ZXNcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBwcml2YXRlIHJvdXRlcygpIHtcbiAgICAgICAgbGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXI7XG4gICAgICAgIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAgICAgSW5kZXhSb3V0ZS5jcmVhdGUocm91dGVyKTtcbiAgICAgICAgVXNlclJvdXRlci5jcmVhdGUocm91dGVyKTtcblxuICAgICAgICAvL3VzZSByb3V0ZXIgbWlkZGxld2FyZVxuICAgICAgICB0aGlzLmFwcC51c2Uocm91dGVyKTtcblxuICAgIH1cblxufVxuIl19