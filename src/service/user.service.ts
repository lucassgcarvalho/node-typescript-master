import { GenericModel } from '../model/generic.model';
import UserRepository from '../repository/user.repository';
import { GenericCallVerbs } from '../interface/generic-call-verbs';

export default class UserService implements GenericCallVerbs<GenericModel> {

    private userRepository: UserRepository;
    
    constructor() {
        this.userRepository =  new UserRepository();
    }

    async get(): Promise<GenericModel> {
        return await this.userRepository.get();
    }

    async getAll() {
        throw new Error("Method not implemented.");
    }

   async post(body: any) {
        return await this.userRepository.post(body);
    }

    async put(id: any, body: any) {
        return await this.userRepository.put(id, body);
    }
    
    async delete(id: any) {
        return await this.userRepository.delete(id);
    }
}
