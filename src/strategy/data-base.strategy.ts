import { GenericCallVerbs } from "../interface/generic-call-verbs";
import { EnumStrategy } from "./enum.strategy";
import MongoDbStrategy from "./mongo-db.strategy";

export default class DataBaseStrategy<T> implements GenericCallVerbs<T>{

    private dbStrategy!: GenericCallVerbs<T>;
    
    constructor(enumStrategy: EnumStrategy, collection?: string) {
        switch(enumStrategy){
            case EnumStrategy.MONGO:
                this.dbStrategy = new MongoDbStrategy(collection ? collection: '');
        }
    }
    
    async get(id: any) {
        return this.dbStrategy.get(id);
    }

    async getAll(options?: any) {
        return  this.dbStrategy.getAll(options);
    }

    async post(body?: any, options?: any) {
        return  this.dbStrategy.post(body, options);
    }

    async put(params: any, options?: any) {
        return this.dbStrategy.put(params, options);
    }

    async delete(id: any, options?: any) {
        return this.dbStrategy.delete(id, options)
    }
}
