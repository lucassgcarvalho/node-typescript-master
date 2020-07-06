"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user.service"));
class UserController {
    constructor(express) {
        this.root = '/users/';
        this.userService = new user_service_1.default();
        this.router = express_1.Router();
        express.use(this.root, this.router);
    }
    get(req, res, next) {
        this.userService.get().then((user) => res.send(user));
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
    init() {
        this.router.get('/', this.get.bind(this));
        this.router.post('/', this.post.bind(this));
        this.router.put('/', this.put.bind(this));
        this.router.delete('/', this.delete.bind(this));
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map