"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constructo
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7Ozs7R0FJRztBQUNIO0lBT0k7Ozs7O09BS0c7SUFDSDtRQUNJLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUEyQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBVztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQVksRUFBRSxPQUFnQjtRQUNyRSxlQUFlO1FBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRTFCLGFBQWE7UUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWxDLFdBQVc7UUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLGFBQWE7UUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDO0FBeERZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvXG4gKlxuICogQGNsYXNzIEJhc2VSb3V0ZVxuICovXG5leHBvcnQgY2xhc3MgQmFzZVJvdXRlIHtcblxuICAgIHByb3RlY3RlZCB0aXRsZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBzY3JpcHRzOiBzdHJpbmdbXTtcblxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBjbGFzcyBCYXNlUm91dGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9pbml0aWFsaXplIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJNeSBOZXcgVHlwZVNjcmlwdCBXZWIgYXBwXCI7XG4gICAgICAgIHRoaXMuc2NyaXB0cyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIEpTIGV4dGVybmFsIGZpbGUgdG8gdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgQmFzZVJvdXRlXG4gICAgICogQG1ldGhvZCBhZGRTY3JpcHRcbiAgICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IFRoZSBzcmMgdG8gdGhlIGV4dGVybmFsIEpTIGZpbGUuXG4gICAgICogQHJldHVybiB7QmFzZVJvdXRlfSBTZWxmIGZvciBjaGFpbmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBhZGRTY3JpcHQoc3JjOiBzdHJpbmcpOiBCYXNlUm91dGUge1xuICAgICAgICB0aGlzLnNjcmlwdHMucHVzaChzcmMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSBwYWdlLlxuICAgICAqXG4gICAgICogQGNsYXNzIEJhc2VSb3V0ZVxuICAgICAqIEBtZXRob2QgcmVuZGVyXG4gICAgICogQHBhcmFtIHJlcSB7UmVxdWVzdH0gVGhlIHJlcXVlc3Qgb2JqZWN0LlxuICAgICAqIEBwYXJhbSByZXMge1Jlc3BvbnNlfSBUaGUgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqIEBwYXJhbSB2aWV3IHtTdHJpbmd9IFRoZSB2aWV3IHRvIHJlbmRlci5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYXBwZW5kIHRvIHRoZSB2aWV3J3MgbG9jYWwgc2NvcGUuXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgcHVibGljIHJlbmRlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIHZpZXc6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdCkge1xuICAgICAgICAvL2FkZCBjb25zdGFudHNcbiAgICAgICAgcmVzLmxvY2Fscy5CQVNFX1VSTCA9IFwiL1wiO1xuXG4gICAgICAgIC8vYWRkIHNjcmlwdHNcbiAgICAgICAgcmVzLmxvY2Fscy5zY3JpcHRzID0gdGhpcy5zY3JpcHRzO1xuXG4gICAgICAgIC8vYWRkIHRpdGxlXG4gICAgICAgIHJlcy5sb2NhbHMudGl0bGUgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgIC8vcmVuZGVyIHZpZXdcbiAgICAgICAgcmVzLnJlbmRlcih2aWV3LCBvcHRpb25zKTtcbiAgICB9XG59Il19