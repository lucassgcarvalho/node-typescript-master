import { MongoDb } from "../config/mongodb.config";
import { GenericCallVerbs } from "../interface/generic-call-verbs";
import { Collection } from "mongodb";
import { GenericModel } from "../model/generic.model";

export default class MongoDbStrategy<T> implements GenericCallVerbs<T> {

    private mongoDb: MongoDb;
    private collection!: string;
    
    constructor(collection: string) {
        if (!collection)  throw "Collection must be not null or undefined!"; 
        this.collection = collection;
        this.mongoDb = new MongoDb();
    }

    async get(options?: any): Promise<T> {
        let userReturn: any;
        await this.getCollection().find().forEach((user: T) => {userReturn = user;});
        return userReturn;
    }

    async getAll(options?: any): Promise<T> {
        // return this.mongoDb.dataBase
        //             .collection("users")
        //             .find();
        let teste = new Promise<T>( () => {} );
        return teste;// await this._collection.find();
    }

    async post(body: any, options: any) {
        return this.getCollection().insertMany(body, options);
    }
    async put(id: any, body: any) {
        return await this.getCollection().update({_id: new MongoDb.ObjectId(id)}, { $set: body }, {w:1});
    }

    async delete(id: any, options?: any) {
        return await this.getCollection().deleteOne( {_id: new MongoDb.ObjectId(id)} );
    }

    private getCollection(): Collection{
       return this.mongoDb.dataBase
                    .collection(this.collection);
    }

}
