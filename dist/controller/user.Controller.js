"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../service/user.service"));
class UserController {
    constructor(express) {
        this.ROOT = '/users/';
        this.userService = new user_service_1.default();
        this.ROUTER = express_1.Router();
        express.use(this.ROOT, this.ROUTER);
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
    get(req, res, next) {
        res.send(this.userService.get());
    }
    init() {
        this.ROUTER.get('/', this.get.bind(this));
        this.ROUTER.post('/', this.post.bind(this));
        this.ROUTER.put('/', this.put.bind(this));
        this.ROUTER.delete('/', this.delete.bind(this));
    }
}
exports.default = UserController;
//# sourceMappingURL=user.Controller.js.map