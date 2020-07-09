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

    async get(id: any) {
        return this.getCollection()
            .then( (collection: Collection) => {collection.findOne({ _id: new MongoDb.ObjectId(id) }) } )
            .catch( (error) => {throw error} ) ;
    }

    async getAll(options?: any) {
        return this.getCollection()
            .then( (collection: Collection) => {collection.find().stream().toArray() } )
            .catch( (error) => {throw error} ) ;
    }

    async post(body: any, options: any) {
        return this.getCollection()
            .then( (collection: Collection) => {collection.insertOne(body, options) } )
            .catch( (error) => {throw error} ) ;
    }

    async put(id: any, body: any) {
        return this.getCollection()
            .then( (collection: Collection) => {collection.update({ _id: new MongoDb.ObjectId(id) }, { $set: body }, { w: 1 }) } )
            .catch( (error) => {throw error} ) ; 
    }

    async delete(id: any, options?: any) {
        return this.getCollection()
            .then( (collection: Collection) => {collection.deleteOne({ _id: new MongoDb.ObjectId(id) })} )
            .catch( (error) => {throw error} ) ; 
    }

    async getCollection(): Promise<Collection> {
         return this.mongoDb.dataBase.collection(this.collection);
    }
}
