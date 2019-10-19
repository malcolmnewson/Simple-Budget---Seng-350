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
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = undefined;
                        return [4 /*yield*/, DbClient.connect()
                                .then(function (db) {
                                console.log("Getting the user: " + userID);
                                return db.collection("users").findOne({ "userID": userID });
                            })
                                .then(function (userDoc) {
                                console.log(userDoc);
                                user = userDoc;
                            })
                                .catch(function (err) {
                                console.log("err.message");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserDao.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allUsers = undefined;
                        return [4 /*yield*/, DbClient.connect()
                                .then(function (db) {
                                console.log("Getting the users collection");
                                return db.collection("users").find().toArray();
                            })
                                .then(function (users) {
                                console.log(users);
                                allUsers = users;
                            })
                                .catch(function (err) {
                                console.log("err.message");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, allUsers];
                }
            });
        });
    };
    return UserDao;
}());
exports.UserDao = UserDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYW9zL3VzZXJEYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUd6Qzs7O0dBR0c7QUFFSDtJQUdJO0lBRUEsQ0FBQztJQUVZLHlCQUFPLEdBQXBCLFVBQXFCLE1BQVk7Ozs7Ozt3QkFDekIsSUFBSSxHQUFHLFNBQVMsQ0FBQzt3QkFFckIscUJBQU0sUUFBUSxDQUFDLE9BQU8sRUFBRTtpQ0FDbkIsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQ0FDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxDQUFDO2dDQUMzQyxPQUFPLEVBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFHLE1BQU0sRUFBQyxDQUFDLENBQUM7NEJBQ2hFLENBQUMsQ0FBQztpQ0FDRCxJQUFJLENBQUMsVUFBQyxPQUFhO2dDQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDOzRCQUNuQixDQUFDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUztnQ0FDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUMvQixDQUFDLENBQUMsRUFBQTs7d0JBWE4sU0FXTSxDQUFDO3dCQUVQLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRVksNkJBQVcsR0FBeEI7Ozs7Ozt3QkFDUSxRQUFRLEdBQUcsU0FBUyxDQUFDO3dCQUV6QixxQkFBTSxRQUFRLENBQUMsT0FBTyxFQUFFO2lDQUNuQixJQUFJLENBQUMsVUFBQyxFQUFRO2dDQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQ0FDNUMsT0FBTyxFQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUNwRCxDQUFDLENBQUM7aUNBQ0QsSUFBSSxDQUFDLFVBQUMsS0FBVztnQ0FDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDOzRCQUNyQixDQUFDLENBQUM7aUNBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBUztnQ0FDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUMvQixDQUFDLENBQUMsRUFBQTs7d0JBWE4sU0FXTSxDQUFDO3dCQUVQLHNCQUFPLFFBQVEsRUFBQzs7OztLQUNuQjtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERiQ2xpZW50ID0gcmVxdWlyZShcIi4uL0RiQ2xpZW50XCIpO1xuaW1wb3J0ICB7IENvbGxlY3Rpb24gfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vKlxuICogVGhpcyBjbGFzcyBpcyBjdXJyZW50bHkgbm90IGJlaW5nIHVzZWQ7IGhvd2V2ZXIgaXQgZXZlbnR1YWxseSB3aWxsIGJlLlxuICogVGhlcmUgYXJlIHNvbWUgZGVzaWduIGRlY2lzaW9ucyB0aGF0IG5lZWQgdG8gYmUgbWFkZS5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVXNlckRhbyB7XG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uISA6IENvbGxlY3Rpb247IC8vQ3VycmVudGx5IG5vdCB1c2VkLlxuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VXNlcih1c2VySUQgOiBhbnkpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgYXdhaXQgRGJDbGllbnQuY29ubmVjdCgpXG4gICAgICAgICAgICAudGhlbigoZGIgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgdGhlIHVzZXI6IFwiICsgdXNlcklEKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIhLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kT25lKHtcInVzZXJJRFwiIDogdXNlcklEfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHVzZXJEb2MgOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRG9jKTtcbiAgICAgICAgICAgICAgICB1c2VyID0gdXNlckRvYztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVyciA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyLm1lc3NhZ2VcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWxsVXNlcnMoKSB7XG4gICAgICAgIGxldCBhbGxVc2VycyA9IHVuZGVmaW5lZDtcblxuICAgICAgICBhd2FpdCBEYkNsaWVudC5jb25uZWN0KClcbiAgICAgICAgICAgIC50aGVuKChkYiA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyB0aGUgdXNlcnMgY29sbGVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGIhLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5maW5kKCkudG9BcnJheSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCh1c2VycyA6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJzKTtcbiAgICAgICAgICAgICAgICBhbGxVc2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyIDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnIubWVzc2FnZVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhbGxVc2VycztcbiAgICB9XG59Il19