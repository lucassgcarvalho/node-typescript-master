import { Collection } from "mongodb";
import { MongoDb } from "../config/mongodb.config";
import { GenericCallVerbs } from "../interface/generic-call-verbs";

export default class MongoDbStrategy<T> implements GenericCallVerbs<T> {

    private mongoDb: MongoDb;
    private collection!: string;

    constructor(collection: string) {
        if (!collection) throw "Collection must be not null or undefined!";
        this.collection = collection;
        this.mongoDb = new MongoDb();
    }

    async get(id: any): Promise<any> {
        try {
            return this.getCollection().findOne({ _id: new MongoDb.ObjectId(id) });
        } catch (error) {
            return {message: error.message, status: 400};
        }
    }

    async getAll(options?: any) {
        return this.getCollection().find().stream().toArray();
    }

    async post(body: any, options: any) {
        try {
            return this.getCollection().insertOne(body, options);
        } catch (error) {
            console.log(error)
        }
    }
    async put(id: any, body: any) {
        return this.getCollection().update({ _id: new MongoDb.ObjectId(id) }, { $set: body }, { w: 1 });
    }

    async delete(id: any, options?: any) {
        return this.getCollection().deleteOne({ _id: new MongoDb.ObjectId(id) });
    }

    private getCollection(): Collection {
        return this.mongoDb.dataBase.collection(this.collection);
    }

}
