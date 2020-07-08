import { GenericModel } from '../model/generic.model';
import UserRepository from '../repository/user.repository';
import { GenericCallVerbs } from '../interface/generic-call-verbs';

export default class UserService implements GenericCallVerbs<GenericModel> {

    private userRepository: UserRepository;
    
    constructor() {
        this.userRepository =  new UserRepository();
    }

   async get(id: any) {
        return await this.userRepository.get(id);
    }

    async getAll() {
        return await this.userRepository.getAll();
    }

    async post(body: any) {
        try {
            return await this.userRepository.post(body).then( (user) => user, (error) => {throw error});
        } catch (error) {
            console.log(error)
        }
    }

    async put(id: any, body: any) {
        return await this.userRepository.put(id, body);
    }
    
    async delete(id: any) {
        return await this.userRepository.delete(id);
    }
}
