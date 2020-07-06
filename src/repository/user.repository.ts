import { UserModel } from "../model/user.model";
import { GenericHttpCallVerbs } from "../interface/generic-http-call-verbs";
import { MongoDb } from "../config/mongodb.config";

export default class UserRepository implements GenericHttpCallVerbs<UserModel>{

    private mongoDb: MongoDb;
    
    constructor() {
        this.mongoDb = new MongoDb();
    }

    async get(): Promise<UserModel> {
        let userReturn = new UserModel();
        await this.mongoDb.dataBase
        .collection("users")
        .find().forEach((user: UserModel) => {
            userReturn = user;
        });
        return userReturn;
    }

    getAll(): UserModel[] {
        throw new Error("Method not implemented.");
    }

    post(): void | UserModel {
        throw new Error("Method not implemented.");
    }

    put(): void | UserModel {
        throw new Error("Method not implemented.");
    }

    delete(): void | UserModel {
        throw new Error("Method not implemented.");
    }
}
