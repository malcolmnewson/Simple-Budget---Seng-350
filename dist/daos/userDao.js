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
Object.defineProperty(exports, "__esModule", { value: true });
var DbClient = require("../DbClient");
/*
 * This class is currently not being used; however it eventually will be.
 * There are some design decisions that need to be made.
 */
var UserDao = /** @class */ (function () {
    function UserDao() {
    }
    UserDao.prototype.getUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var user, database, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 1:
                        database = _b.sent();
                        user = database.collection("users").findOne({ "userID": userID });
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        console.log("Dao: Error getting user");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, user];
                }
            });
        });
    };
    UserDao.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, database, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        users = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 2:
                        database = _b.sent();
                        users = database.collection("users").find().toArray();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        console.log("Dao: Error getting all users.");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, users];
                }
            });
        });
    };
    return UserDao;
}());
exports.UserDao = UserDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYW9zL3VzZXJEYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUd6Qzs7O0dBR0c7QUFFSDtJQUVJO0lBRUEsQ0FBQztJQUVZLHlCQUFPLEdBQXBCLFVBQXFCLE1BQVk7Ozs7Ozs7d0JBSVYscUJBQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBbkMsUUFBUSxHQUFHLFNBQXdCO3dCQUN2QyxJQUFJLEdBQUcsUUFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUcsTUFBTSxFQUFDLENBQUMsQ0FBQzs7Ozt3QkFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzs0QkFHM0Msc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2Y7SUFFWSw2QkFBVyxHQUF4Qjs7Ozs7O3dCQUNRLEtBQUssR0FBRyxTQUFTLENBQUM7Ozs7d0JBR0gscUJBQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBbkMsUUFBUSxHQUFHLFNBQXdCO3dCQUN2QyxLQUFLLEdBQUcsUUFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozt3QkFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOzs0QkFHakQsc0JBQU8sS0FBSyxFQUFDOzs7O0tBQ2hCO0lBQ0wsY0FBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGJDbGllbnQgPSByZXF1aXJlKFwiLi4vRGJDbGllbnRcIik7XG5pbXBvcnQgIHsgQ29sbGVjdGlvbiB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8qXG4gKiBUaGlzIGNsYXNzIGlzIGN1cnJlbnRseSBub3QgYmVpbmcgdXNlZDsgaG93ZXZlciBpdCBldmVudHVhbGx5IHdpbGwgYmUuXG4gKiBUaGVyZSBhcmUgc29tZSBkZXNpZ24gZGVjaXNpb25zIHRoYXQgbmVlZCB0byBiZSBtYWRlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBVc2VyRGFvIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFVzZXIodXNlcklEIDogYW55KSB7XG4gICAgICAgIGxldCB1c2VyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YWJhc2UgPSBhd2FpdCBEYkNsaWVudC5jb25uZWN0KCk7XG4gICAgICAgICAgICB1c2VyID0gZGF0YWJhc2UhLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHtcInVzZXJJRFwiIDogdXNlcklEfSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYW86IEVycm9yIGdldHRpbmcgdXNlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRBbGxVc2VycygpIHtcbiAgICAgICAgbGV0IHVzZXJzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YWJhc2UgPSBhd2FpdCBEYkNsaWVudC5jb25uZWN0KCk7XG4gICAgICAgICAgICB1c2VycyA9IGRhdGFiYXNlIS5jb2xsZWN0aW9uKFwidXNlcnNcIikuZmluZCgpLnRvQXJyYXkoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhbzogRXJyb3IgZ2V0dGluZyBhbGwgdXNlcnMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cbn0iXX0=