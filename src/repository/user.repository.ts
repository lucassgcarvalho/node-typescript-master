import { GenericCallVerbs } from "../interface/generic-call-verbs";
import { UserModel } from "../model/user.model";
import DataBaseStrategy from "../strategy/data-base.strategy";
import { EnumStrategy } from "../strategy/enum.strategy";

export default class UserRepository implements GenericCallVerbs<UserModel>{

    private dbStrategy: DataBaseStrategy<UserModel>;
    
    constructor() {
        this.dbStrategy = new DataBaseStrategy(EnumStrategy.MONGO, UserModel.collection);
    }

    async get(id: any) {
        return this.dbStrategy.get(id);
    }

    async getAll() {
        throw new Error("Method not implemented.");
    }

    async post(body: any) {
        return await this.dbStrategy.post(body);
    }

    async put(id: any, body: any) {
        return this.dbStrategy.put(id, body);
    }

    async delete(id: any) {
        return this.dbStrategy.delete(id);
    }
}
