"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PersonController {
    constructor(express) {
        this.ROOT = '/person/';
        this.ROUTER = express_1.Router();
        this.init();
        express.use(this.ROOT, this.ROUTER);
    }
    get(req, res, next) {
        res.send("Person");
    }
    post(req, res, next) {
        res.send("Person post");
    }
    put(req, res, next) {
        res.send("Person put");
    }
    delete(req, res, next) {
        res.send("Person delete");
    }
    init() {
        this.ROUTER.get('/', this.get);
        this.ROUTER.post('/', this.post);
        this.ROUTER.put('/', this.put);
        this.ROUTER.delete('/', this.delete);
    }
}
exports.default = PersonController;
