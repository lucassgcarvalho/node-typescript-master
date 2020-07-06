import UserRepository from '../repository/user.repository';
import { GenericHttpCallVerbs } from '../interface/generic-http-call-verbs';
import { GenericModel } from '../model/generic.model';

export default class UserService implements GenericHttpCallVerbs<GenericModel> {

    private userRepository: UserRepository;
    
    constructor() {
        this.userRepository =  new UserRepository();
    }

    async get(): Promise<GenericModel> {
        return await this.userRepository.get();
    }

    getAll(): GenericModel[] {
        throw new Error("Method not implemented.");
    }

    post(): void | GenericModel {
        throw new Error("Method not implemented.");
    }

    put(): void | GenericModel {
        throw new Error("Method not implemented.");
    }
    
    delete(): void | GenericModel {
        throw new Error("Method not implemented.");
    }
}
