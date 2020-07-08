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

    async get (req: Request, res: Response, next: NextFunction) {
        this.userService.get(req.query['id']).then( (user) => res.send(user));
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        res.send(await this.userService.getAll());
    }

    async post(req: Request, res: Response, next: NextFunction) {
        try {
            res.send(await this.userService.post(req.body));
        } catch (error) {
            console.log(error)
        }
    }

    async put(req: Request, res: Response, next: NextFunction) {
        res.send(await this.userService.put(req.query['id'], req.body));
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        res.send(await this.userService.delete(req.query['id']));
    }

    init() {
        this.router.get('/', this.get.bind(this));
        this.router.get('/all', this.getAll.bind(this));
        this.router.post('/',   this.post.bind(this) );
        this.router.put('/', this.put.bind(this));
        this.router.delete('/', this.delete.bind(this));
    }
}
