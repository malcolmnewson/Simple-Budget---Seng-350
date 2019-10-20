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
        router.get("/heroes", function (req, res, next) {
            new HeroRouter().getAll(req, res, next);
        });
        // add getOne route
        router.get("/heroes/:id", function (req, res, next) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb1JvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaGVyb1JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUF5QztBQUV6QztJQWdCSTtRQUNJLG9CQUFvQjtJQUN4QixDQUFDO0lBakJhLGlCQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFDL0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUU5RCxrQkFBa0I7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQ2xFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQkFBbUI7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQ3RFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQ7O09BRUc7SUFDSSwyQkFBTSxHQUFiLFVBQWMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUN6RCxRQUFRLENBQUMsT0FBTyxFQUFFO2FBQ2IsSUFBSSxDQUFDLFVBQUMsRUFBUTtZQUNYLE9BQU8sRUFBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUcsU0FBUyxFQUFFLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvRSxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxTQUFlO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFTO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRDs7T0FFRztJQUNJLDJCQUFNLEdBQWIsVUFBYyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ3pELDhDQUE4QztRQUM5Qzs7Ozs7Ozs7Ozs7Ozs7OztXQWdCRztJQUNQLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgRGJDbGllbnQgPSByZXF1aXJlKFwiLi4vRGJDbGllbnRcIik7XG5cbmV4cG9ydCBjbGFzcyBIZXJvUm91dGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShyb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvL2xvZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIltIZXJvUm91dGU6OmNyZWF0ZV0gQ3JlYXRpbmcgSGVyb1JvdXRlcyByb3V0ZS5cIik7XG5cbiAgICAgICAgLy9hZGQgZ2V0QWxsIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvaGVyb2VzXCIsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEhlcm9Sb3V0ZXIoKS5nZXRBbGwocmVxLCByZXMsIG5leHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgZ2V0T25lIHJvdXRlXG4gICAgICAgIHJvdXRlci5nZXQoXCIvaGVyb2VzLzppZFwiLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIG5ldyBIZXJvUm91dGVyKCkuZ2V0T25lKHJlcSwgcmVzLCBuZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIG5vdCBtdWNoIGhlcmUgeWV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR0VUIGFsbCBIZXJvZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICBEYkNsaWVudC5jb25uZWN0KClcbiAgICAgICAgICAgIC50aGVuKChkYiA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYiEuY29sbGVjdGlvbihcImNvbXBhbmllc1wiKS5maW5kKHsgXCJuYW1lXCIgOiBcIlNsYWNrZXJcIiB9ICkudG9BcnJheSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChjb21wYW5pZXMgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wYW5pZXMpO1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKGNvbXBhbmllcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyci5tZXNzYWdlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHRVQgb25lIGhlcm8gYnkgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T25lKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gY2hhbmdlIHRoZSBiZWxvdyBjb2RlIHRvIHVzZSBtb25nby5cbiAgICAgICAgLypsZXQgcXVlcnkgPSBwYXJzZUludChyZXEucGFyYW1zLmlkKTtcbiAgICAgICAgbGV0IGhlcm8gPSBIZXJvZXMuZmluZCgoaGVybzogYW55KSA9PiBoZXJvLmlkID09PSBxdWVyeSk7XG4gICAgICAgIGlmIChoZXJvKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBoZXJvXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdObyBoZXJvIGZvdW5kIHdpdGggdGhlIGdpdmVuIGlkLicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9Ki9cbiAgICB9XG59Il19