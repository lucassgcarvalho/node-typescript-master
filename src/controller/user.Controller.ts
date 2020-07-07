import { Router, Request, Response, NextFunction, Application } from 'express';
import UserService from '../service/user.service';
import { GenericHttpCallVerbs } from '../interface/generic-http-call-verbs';
import { GenericModel } from '../model/generic.model';

export default class UserController implements GenericHttpCallVerbs<GenericModel>{

    private userService: UserService;

    ROOT: string = '/users/';
    ROUTER: Router

    constructor(express: Application) {
        this.userService =  new UserService();
        this.ROUTER = Router();
        express.use(this.ROOT, this.ROUTER);
    }

    get(req: Request, res: Response, next: NextFunction) {
        res.send(this.userService.get());
    }

    getAll(req: Request, res: Response, next: NextFunction) {
        res.send(this.userService.get());
    }

    post(req: Request, res: Response, next: NextFunction) {
        res.send(this.userService.get());
    }

    put(req: Request, res: Response, next: NextFunction) {
        res.send(this.userService.get());
    }

    delete(req: Request, res: Response, next: NextFunction) {
        res.send(this.userService.get());
    }
    
    init() {
        this.ROUTER.get('/', this.get.bind(this));
        this.ROUTER.post('/', this.post.bind(this));
        this.ROUTER.put('/', this.put.bind(this));
        this.ROUTER.delete('/', this.delete.bind(this));
    }
}
