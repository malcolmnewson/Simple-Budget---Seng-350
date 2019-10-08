"use strict";
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
var mongodb_1 = require("mongodb");
var DbClient = /** @class */ (function () {
    function DbClient() {
    }
    DbClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mongodb_1.MongoClient.connect("mongodb://localhost:27017")];
                    case 1:
                        client = _a.sent();
                        this.db = client.db("myapp");
                        console.log("Connected to db");
                        return [2 /*return*/, this.db];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Unable to connect to db");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DbClient;
}());
module.exports = new DbClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGJDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBDO0FBRTFDO0lBQUE7SUFlQSxDQUFDO0lBWlMsMEJBQU8sR0FBYjs7Ozs7Ozt3QkFHcUIscUJBQU0scUJBQVcsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsRUFBQTs7d0JBQS9ELE1BQU0sR0FBRyxTQUFzRDt3QkFDbkUsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQy9CLHNCQUFPLElBQUksQ0FBQyxFQUFFLEVBQUM7Ozt3QkFFZixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7OztLQUc5QztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQUVELGlCQUFTLElBQUksUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgRGIgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jbGFzcyBEYkNsaWVudCB7XG4gICAgcHVibGljIGRiITogRGI7XG5cbiAgICBhc3luYyBjb25uZWN0KCkge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTdcIik7XG4gICAgICAgICAgICB0aGlzLmRiID0gY2xpZW50LmRiKFwibXlhcHBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBkYlwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gY29ubmVjdCB0byBkYlwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgPSBuZXcgRGJDbGllbnQoKTsiXX0=