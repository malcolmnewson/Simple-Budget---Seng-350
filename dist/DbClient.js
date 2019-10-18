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
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@cluster0-ov4iq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
var DbClient = /** @class */ (function () {
    function DbClient() {
    }
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
                        this.db = client.db("sample_training");
                        console.log("Connected to sample_training database");
                        return [2 /*return*/, this.db];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Unable to connect to database");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DbClient;
}());
module.exports = new DbClient();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGJDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBDO0FBQzFDOzs7Ozs7Ozs7RUFTRTtBQUVGO0lBQUE7SUFpQkEsQ0FBQztJQWJTLDBCQUFPLEdBQWI7Ozs7Ozt3QkFFVSxHQUFHLEdBQUcsdUZBQXVGLENBQUM7Ozs7d0JBR25GLHFCQUFNLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEUsTUFBTSxHQUFHLFNBQXlEO3dCQUN0RSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO3dCQUNyRCxzQkFBTyxJQUFJLENBQUMsRUFBRSxFQUFDOzs7d0JBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOzs7Ozs7S0FFcEQ7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQUVELGlCQUFTLElBQUksUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgRGIgfSBmcm9tIFwibW9uZ29kYlwiO1xuLypcbmNvbnN0IE1vbmdvQ2xpZW50ID0gcmVxdWlyZSgnbW9uZ29kYicpLk1vbmdvQ2xpZW50O1xuY29uc3QgdXJpID0gXCJtb25nb2RiK3NydjovL2FkbWluOjxwYXNzd29yZD5AY2x1c3RlcjAtb3Y0aXEubW9uZ29kYi5uZXQvdGVzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuY2xpZW50LmNvbm5lY3QoZXJyID0+IHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNsaWVudC5kYihcInRlc3RcIikuY29sbGVjdGlvbihcImRldmljZXNcIik7XG4gIC8vIHBlcmZvcm0gYWN0aW9ucyBvbiB0aGUgY29sbGVjdGlvbiBvYmplY3RcbiAgY2xpZW50LmNsb3NlKCk7XG59KTtcbiovXG5cbmNsYXNzIERiQ2xpZW50IHtcbiAgICAvLyBUaGlzIHdpbGwgYmUgdXBkYXRlZCB0byBiZSBwcm9qZWN0X2RhdGEgZGF0YWJhc2VcbiAgICBwdWJsaWMgZGIhOiBEYjsgLy8gZGF0YWJhc2VcblxuICAgIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIENvbm5lY3Rpb24gdXJpXG4gICAgICAgIGNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC1vdjRpcS5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5kYiA9IGNsaWVudC5kYihcInNhbXBsZV90cmFpbmluZ1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHNhbXBsZV90cmFpbmluZyBkYXRhYmFzZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmFibGUgdG8gY29ubmVjdCB0byBkYXRhYmFzZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0ID0gbmV3IERiQ2xpZW50KCk7Il19