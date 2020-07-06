import { Application, NextFunction, Request, Response, Router } from 'express';
import UserService from '../service/user.service';
import { GenericHttpCallVerbs } from '../interface/generic-http-call-verbs';
import { GenericModel } from '../model/generic.model';

export default class UserController implements GenericHttpCallVerbs<GenericModel>{

    private userService: UserService;
    private root: string = '/users/';
    private router: Router;

    constructor(express: Application) {
        this.userService = new UserService();
        this.router = Router();
        express.use(this.root, this.router);
    }

    get (req: Request, res: Response, next: NextFunction) {
        this.userService.get().then( (user) => res.send(user));
    }

    getAll(): void{
        throw new Error("Method not implemented.");
    }
    post(): void{
        throw new Error("Method not implemented.");
    }
    put(): void{
        throw new Error("Method not implemented.");
    }
    delete(): void{
        throw new Error("Method not implemented.");
    }

    init() {
        this.router.get('/', this.get.bind(this));
        this.router.post('/', this.post.bind(this));
        this.router.put('/', this.put.bind(this));
        this.router.delete('/', this.delete.bind(this));
    }
}
