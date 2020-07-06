"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../model/user.model");
const mongodb_config_1 = require("../config/mongodb.config");
class UserRepository {
    constructor() {
        this.mongoDb = new mongodb_config_1.MongoDb();
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            let userReturn = new user_model_1.UserModel();
            yield this.mongoDb.dataBase
                .collection("users")
                .find().forEach((user) => {
                userReturn = user;
            });
            return userReturn;
        });
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    post() {
        throw new Error("Method not implemented.");
    }
    put() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = UserRepository;
//# sourceMappingURL=user.repository.js.map