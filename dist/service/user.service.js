"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repository/user.repository"));
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.default();
    }
    get() {
        return this.userRepository.get();
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
exports.default = UserService;
//# sourceMappingURL=user.service.js.map