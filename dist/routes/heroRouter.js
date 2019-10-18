"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbClient = require("../DbClient");
var HeroRouter = /** @class */ (function () {
    function HeroRouter() {
        // not much here yet
    }
    HeroRouter.create = function (router) {
        //log
        console.log("[HeroRoute::create] Creating HeroRoutes route.");
        //add getAll route
        router.get("/api/heroes", function (req, res, next) {
            new HeroRouter().getAll(req, res, next);
        });
        // add getOne route
        router.get("/api/heroes/:id", function (req, res, next) {
            new HeroRouter().getOne(req, res, next);
        });
    };
    /**
     * GET all Heroes.
     */
    HeroRouter.prototype.getAll = function (req, res, next) {
        DbClient.connect()
            .then(function (db) {
            return db.collection("companies").find({ "name": "Slacker" }).toArray();
        })
            .then(function (companies) {
            console.log(companies);
            res.send(companies);
        })
            .catch(function (err) {
            console.log("err.message");
        });
    };
    /**
     * GET one hero by id
     */
    HeroRouter.prototype.getOne = function (req, res, next) {
        // need to change the below code to use mongo.
        /*let query = parseInt(req.params.id);
        let hero = Heroes.find((hero: any) => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    hero
                });
        }
        else {
            res.status(404)
                .send({
                    message: 'No hero found with the given id.',
                    status: res.status
                });
        }*/
    };
    return HeroRouter;
}());
exports.HeroRouter = HeroRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaGVyb1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUV6QztJQWdCSTtRQUNJLG9CQUFvQjtJQUN4QixDQUFDO0lBakJhLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUU5RCxrQkFBa0I7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQ3RFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQkFBbUI7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFNRDs7T0FFRztJQUNJLDJCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3pELFFBQVEsQ0FBQyxPQUFPLEVBQUU7YUFDYixJQUFJLENBQUMsVUFBQyxFQUFRO1lBQ1gsT0FBTyxFQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRyxTQUFTLEVBQUUsQ0FBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9FLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLFNBQWU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQVM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMkJBQU0sR0FBYixVQUFjLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDekQsOENBQThDO1FBQzlDOzs7Ozs7Ozs7Ozs7Ozs7O1dBZ0JHO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQTVEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9ufSBmcm9tICdleHByZXNzJztcbmltcG9ydCBEYkNsaWVudCA9IHJlcXVpcmUoXCIuLi9EYkNsaWVudFwiKTtcblxuZXhwb3J0IGNsYXNzIEhlcm9Sb3V0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vbG9nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0hlcm9Sb3V0ZTo6Y3JlYXRlXSBDcmVhdGluZyBIZXJvUm91dGVzIHJvdXRlLlwiKTtcblxuICAgICAgICAvL2FkZCBnZXRBbGwgcm91dGVcbiAgICAgICAgcm91dGVyLmdldChcIi9hcGkvaGVyb2VzXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEhlcm9Sb3V0ZXIoKS5nZXRBbGwocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgZ2V0T25lIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvYXBpL2hlcm9lcy86aWRcIiwgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBuZXcgSGVyb1JvdXRlcigpLmdldE9uZShyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBub3QgbXVjaCBoZXJlIHlldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdFVCBhbGwgSGVyb2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgRGJDbGllbnQuY29ubmVjdCgpXG4gICAgICAgICAgICAudGhlbigoZGIgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIhLmNvbGxlY3Rpb24oXCJjb21wYW5pZXNcIikuZmluZCh7IFwibmFtZVwiIDogXCJTbGFja2VyXCIgfSApLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoY29tcGFuaWVzIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcGFuaWVzKTtcbiAgICAgICAgICAgICAgICByZXMuc2VuZChjb21wYW5pZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnIubWVzc2FnZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR0VUIG9uZSBoZXJvIGJ5IGlkXG4gICAgICovXG4gICAgcHVibGljIGdldE9uZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICAvLyBuZWVkIHRvIGNoYW5nZSB0aGUgYmVsb3cgY29kZSB0byB1c2UgbW9uZ28uXG4gICAgICAgIC8qbGV0IHF1ZXJ5ID0gcGFyc2VJbnQocmVxLnBhcmFtcy5pZCk7XG4gICAgICAgIGxldCBoZXJvID0gSGVyb2VzLmZpbmQoKGhlcm86IGFueSkgPT4gaGVyby5pZCA9PT0gcXVlcnkpO1xuICAgICAgICBpZiAoaGVybykge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgaGVyb1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm8gaGVybyBmb3VuZCB3aXRoIHRoZSBnaXZlbiBpZC4nLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSovXG4gICAgfVxufSJdfQ==