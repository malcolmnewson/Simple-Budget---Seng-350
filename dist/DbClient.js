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
    /*
    * Does client.close() need to be called at some point in this function or does
    * it have to be closed after?
     */
    DbClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, client, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = "mongodb+srv://admin:admin@cluster0-ov4iq.mongodb.net/test?retryWrites=true&w=majority";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mongodb_1.MongoClient.connect(uri, { useNewUrlParser: true })];
                    case 2:
                        client = _a.sent();
                        this.db = client.db("project_data");
                        console.log("Connected to project_data database");
                        return [2 /*return*/, this.db];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Unable to connect to project_data database");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DbClient;
}());
module.exports = new DbClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGJDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBDO0FBRTFDO0lBQUE7SUFxQkEsQ0FBQztJQWpCRzs7O09BR0c7SUFDRywwQkFBTyxHQUFiOzs7Ozs7d0JBRVUsR0FBRyxHQUFHLHVGQUF1RixDQUFDOzs7O3dCQUduRixxQkFBTSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQTs7d0JBQWxFLE1BQU0sR0FBRyxTQUF5RDt3QkFDdEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7d0JBQ2xELHNCQUFPLElBQUksQ0FBQyxFQUFFLEVBQUM7Ozt3QkFFZixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Ozs7OztLQUVqRTtJQUNMLGVBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBRUQsaUJBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBEYiB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNsYXNzIERiQ2xpZW50IHtcbiAgICAvLyBwcm9qZWN0X2RhdGEgZGF0YWJhc2VcbiAgICBwdWJsaWMgZGIhOiBEYjtcblxuICAgIC8qXG4gICAgKiBEb2VzIGNsaWVudC5jbG9zZSgpIG5lZWQgdG8gYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW4gdGhpcyBmdW5jdGlvbiBvciBkb2VzXG4gICAgKiBpdCBoYXZlIHRvIGJlIGNsb3NlZCBhZnRlcj9cbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCkge1xuICAgICAgICAvLyBDb25uZWN0aW9uIHVyaVxuICAgICAgICBjb25zdCB1cmkgPSBcIm1vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAtb3Y0aXEubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZGIgPSBjbGllbnQuZGIoXCJwcm9qZWN0X2RhdGFcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBwcm9qZWN0X2RhdGEgZGF0YWJhc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gcHJvamVjdF9kYXRhIGRhdGFiYXNlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgPSBuZXcgRGJDbGllbnQoKTsiXX0=