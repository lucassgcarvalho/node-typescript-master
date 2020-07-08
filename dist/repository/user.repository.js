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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../model/user.model");
const data_base_strategy_1 = __importDefault(require("../strategy/data-base.strategy"));
const enum_strategy_1 = require("../strategy/enum.strategy");
class UserRepository {
    constructor() {
        this.dbStrategy = new data_base_strategy_1.default(enum_strategy_1.EnumStrategy.MONGO, user_model_1.UserModel.collection);
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbStrategy.get(id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dbStrategy.post(body);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    put(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbStrategy.put(id, body);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbStrategy.delete(id);
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=user.repository.js.map