"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constructor
 *
 * @class BaseRoute
 */
var BaseRoute = /** @class */ (function () {
    /**
     * Constructor
     *
     * @class BaseRoute
     * @constructor
     */
    function BaseRoute() {
        //initialize variables
        this.title = "My New TypeScript Web app";
        this.scripts = [];
    }
    /**
     * Add a JS external file to the request.
     *
     * @class BaseRoute
     * @method addScript
     * @param src {string} The src to the external JS file.
     * @return {BaseRoute} Self for chaining
     */
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    /**
     * Render a page.
     *
     * @class BaseRoute
     * @method render
     * @param req {Request} The request object.
     * @param res {Response} The response object.
     * @param view {String} The view to render.
     * @param options {Object} Additional options to append to the view's local scope.
     * @return void
     */
    BaseRoute.prototype.render = function (req, res, view, options) {
        //add constants
        res.locals.BASE_URL = "/";
        //add scripts
        res.locals.scripts = this.scripts;
        //add title
        res.locals.title = this.title;
        //render view
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7Ozs7R0FJRztBQUNIO0lBT0k7Ozs7O09BS0c7SUFDSDtRQUNJLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUEyQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBVztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQVksRUFBRSxPQUFnQjtRQUNyRSxlQUFlO1FBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTFCLGFBQWE7UUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWxDLFdBQVc7UUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLGFBQWE7UUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBeERZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvclxuICpcbiAqIEBjbGFzcyBCYXNlUm91dGVcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VSb3V0ZSB7XG5cbiAgICBwcm90ZWN0ZWQgdGl0bGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgc2NyaXB0czogc3RyaW5nW107XG5cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAY2xhc3MgQmFzZVJvdXRlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vaW5pdGlhbGl6ZSB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiTXkgTmV3IFR5cGVTY3JpcHQgV2ViIGFwcFwiO1xuICAgICAgICB0aGlzLnNjcmlwdHMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBKUyBleHRlcm5hbCBmaWxlIHRvIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQGNsYXNzIEJhc2VSb3V0ZVxuICAgICAqIEBtZXRob2QgYWRkU2NyaXB0XG4gICAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBUaGUgc3JjIHRvIHRoZSBleHRlcm5hbCBKUyBmaWxlLlxuICAgICAqIEByZXR1cm4ge0Jhc2VSb3V0ZX0gU2VsZiBmb3IgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU2NyaXB0KHNyYzogc3RyaW5nKTogQmFzZVJvdXRlIHtcbiAgICAgICAgdGhpcy5zY3JpcHRzLnB1c2goc3JjKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgcGFnZS5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBCYXNlUm91dGVcbiAgICAgKiBAbWV0aG9kIHJlbmRlclxuICAgICAqIEBwYXJhbSByZXEge1JlcXVlc3R9IFRoZSByZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gcmVzIHtSZXNwb25zZX0gVGhlIHJlc3BvbnNlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gdmlldyB7U3RyaW5nfSBUaGUgdmlldyB0byByZW5kZXIuXG4gICAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gQWRkaXRpb25hbCBvcHRpb25zIHRvIGFwcGVuZCB0byB0aGUgdmlldydzIGxvY2FsIHNjb3BlLlxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCB2aWV3OiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3QpIHtcbiAgICAgICAgLy9hZGQgY29uc3RhbnRzXG4gICAgICAgIHJlcy5sb2NhbHMuQkFTRV9VUkwgPSBcIi9cIjtcblxuICAgICAgICAvL2FkZCBzY3JpcHRzXG4gICAgICAgIHJlcy5sb2NhbHMuc2NyaXB0cyA9IHRoaXMuc2NyaXB0cztcblxuICAgICAgICAvL2FkZCB0aXRsZVxuICAgICAgICByZXMubG9jYWxzLnRpdGxlID0gdGhpcy50aXRsZTtcblxuICAgICAgICAvL3JlbmRlciB2aWV3XG4gICAgICAgIHJlcy5yZW5kZXIodmlldywgb3B0aW9ucyk7XG4gICAgfVxufSJdfQ==