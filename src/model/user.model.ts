import { GenericModel } from "./generic.model";

export class UserModel extends GenericModel {
    static collection = "users";

    name!: string;
    email!: string;
    password!: string;

    constructor(dbModel?: string) { 
        super();
        this.setModel(dbModel? dbModel: UserModel.collection); 
    }

    build(id: number, name: string, email: string, password: string): UserModel{
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        return this;
    }

    buildWithObject(userModel: UserModel): UserModel{
        this.id = userModel.id;
        this.name = userModel.name;
        this.email = userModel.email;
        this.password = userModel.password;
        return this;
    }

    buildWithoutId(name: string, email: string, password: string): UserModel{
         this.build(0, name, email, password); delete this.id;
         return this;
    }
}