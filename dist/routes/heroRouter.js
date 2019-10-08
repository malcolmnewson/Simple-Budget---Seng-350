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
            return db.collection("heroes").find().toArray();
        })
            .then(function (heroes) {
            console.log(heroes);
            res.send(heroes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaGVyb1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUV6QztJQWdCSTtRQUNJLG9CQUFvQjtJQUN4QixDQUFDO0lBakJhLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUU5RCxrQkFBa0I7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQ3RFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQkFBbUI7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7WUFDMUUsSUFBSSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFNRDs7T0FFRztJQUNJLDJCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3pELFFBQVEsQ0FBQyxPQUFPLEVBQUU7YUFDYixJQUFJLENBQUMsVUFBQyxFQUFRO1lBQ1gsT0FBTyxFQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JELENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE1BQVk7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQ7O09BRUc7SUFDSSwyQkFBTSxHQUFiLFVBQWMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUN6RCw4Q0FBOEM7UUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7V0FnQkc7SUFDUCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb259IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IERiQ2xpZW50ID0gcmVxdWlyZShcIi4uL0RiQ2xpZW50XCIpO1xuXG5leHBvcnQgY2xhc3MgSGVyb1JvdXRlciB7XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy9sb2dcbiAgICAgICAgY29uc29sZS5sb2coXCJbSGVyb1JvdXRlOjpjcmVhdGVdIENyZWF0aW5nIEhlcm9Sb3V0ZXMgcm91dGUuXCIpO1xuXG4gICAgICAgIC8vYWRkIGdldEFsbCByb3V0ZVxuICAgICAgICByb3V0ZXIuZ2V0KFwiL2FwaS9oZXJvZXNcIiwgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBuZXcgSGVyb1JvdXRlcigpLmdldEFsbChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBnZXRPbmUgcm91dGVcbiAgICAgICAgcm91dGVyLmdldChcIi9hcGkvaGVyb2VzLzppZFwiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG5ldyBIZXJvUm91dGVyKCkuZ2V0T25lKHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIG5vdCBtdWNoIGhlcmUgeWV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR0VUIGFsbCBIZXJvZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICBEYkNsaWVudC5jb25uZWN0KClcbiAgICAgICAgICAgIC50aGVuKChkYiA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYiEuY29sbGVjdGlvbihcImhlcm9lc1wiKS5maW5kKCkudG9BcnJheSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChoZXJvZXMgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXJvZXMpO1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKGhlcm9lcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyci5tZXNzYWdlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHRVQgb25lIGhlcm8gYnkgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T25lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gY2hhbmdlIHRoZSBiZWxvdyBjb2RlIHRvIHVzZSBtb25nby5cbiAgICAgICAgLypsZXQgcXVlcnkgPSBwYXJzZUludChyZXEucGFyYW1zLmlkKTtcbiAgICAgICAgbGV0IGhlcm8gPSBIZXJvZXMuZmluZCgoaGVybzogYW55KSA9PiBoZXJvLmlkID09PSBxdWVyeSk7XG4gICAgICAgIGlmIChoZXJvKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBoZXJvXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBoZXJvIGZvdW5kIHdpdGggdGhlIGdpdmVuIGlkLicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9Ki9cbiAgICB9XG59Il19