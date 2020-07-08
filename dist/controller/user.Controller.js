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
        return __awaiter(this, void 0, void 0, function* () {
            this.userService.get(req.query['id']).then((user) => res.send(user));
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    post(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield this.userService.post(req.body));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    put(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield this.userService.put(req.query['id'], req.body));
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield this.userService.delete(req.query['id']));
        });
    }
    init() {
        this.router.get('/', this.get.bind(this));
        this.router.post('/', this.post.bind(this));
        this.router.put('/', this.put.bind(this));
        this.router.delete('/', this.delete.bind(this));
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map