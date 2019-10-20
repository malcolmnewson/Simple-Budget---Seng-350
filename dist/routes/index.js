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
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
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
        //set custom title
        this.title = "Home | This is the main page";
        //set message
        var options = {
            "message": "Welcome to the UVic 350!"
        };
        //render template
        this.render(req, res, "index", options);
    };
    return IndexRoute;
}(route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlDQUFvQztBQUdwQzs7OztHQUlHO0FBQ0g7SUFBZ0MsOEJBQVM7SUFtQnJDOzs7OztPQUtHO0lBQ0g7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUF6QkQ7Ozs7OztPQU1HO0lBQ1csaUJBQU0sR0FBcEIsVUFBcUIsTUFBYztRQUMvQixLQUFLO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBRTFELHFCQUFxQjtRQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7WUFDNUQsSUFBSSxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFZRDs7Ozs7Ozs7T0FRRztJQUNJLDBCQUFLLEdBQVosVUFBYSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3hELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLDhCQUE4QixDQUFDO1FBRTVDLGFBQWE7UUFDYixJQUFJLE9BQU8sR0FBVztZQUNsQixTQUFTLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7UUFFRixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBbERELENBQWdDLGlCQUFTLEdBa0R4QztBQWxEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL3JvdXRlXCI7XG5cblxuLyoqXG4gKiAvIHJvdXRlXG4gKlxuICogQGNsYXNzIEluZGV4Um91dGVcbiAqL1xuZXhwb3J0IGNsYXNzIEluZGV4Um91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSByb3V0ZXMuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgSW5kZXhSb3V0ZVxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vbG9nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0luZGV4Um91dGU6OmNyZWF0ZV0gQ3JlYXRpbmcgaW5kZXggcm91dGUuXCIpO1xuXG4gICAgICAgIC8vYWRkIGhvbWUgcGFnZSByb3V0ZVxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1wiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG5ldyBJbmRleFJvdXRlKCkuaW5kZXgocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQGNsYXNzIEluZGV4Um91dGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaG9tZSBwYWdlIHJvdXRlLlxuICAgICAqXG4gICAgICogQGNsYXNzIEluZGV4Um91dGVcbiAgICAgKiBAbWV0aG9kIGluZGV4XG4gICAgICogQHBhcmFtIHJlcSB7UmVxdWVzdH0gVGhlIGV4cHJlc3MgUmVxdWVzdCBvYmplY3QuXG4gICAgICogQHBhcmFtIHJlcyB7UmVzcG9uc2V9IFRoZSBleHByZXNzIFJlc3BvbnNlIG9iamVjdC5cbiAgICAgKiBAbmV4dCB7TmV4dEZ1bmN0aW9ufSBFeGVjdXRlIHRoZSBuZXh0IG1ldGhvZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5kZXgocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgLy9zZXQgY3VzdG9tIHRpdGxlXG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkhvbWUgfCBUaGlzIGlzIHRoZSBtYWluIHBhZ2VcIjtcblxuICAgICAgICAvL3NldCBtZXNzYWdlXG4gICAgICAgIGxldCBvcHRpb25zOiBPYmplY3QgPSB7XG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJXZWxjb21lIHRvIHRoZSBVVmljIDM1MCFcIlxuICAgICAgICB9O1xuXG4gICAgICAgIC8vcmVuZGVyIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucmVuZGVyKHJlcSwgcmVzLCBcImluZGV4XCIsIG9wdGlvbnMpO1xuICAgIH1cbn0iXX0=