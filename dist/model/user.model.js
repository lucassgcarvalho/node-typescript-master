"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor() { }
    build(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        return this;
    }
    buildWithObject(userModel) {
        this.id = userModel.id;
        this.name = userModel.name;
        this.email = userModel.email;
        this.password = userModel.password;
        return this;
    }
    buildWithoutId(name, email, password) {
        this.build(0, name, email, password);
        delete this.id;
        return this;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map