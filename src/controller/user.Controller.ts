import { Application, NextFunction, Request, Response, Router } from 'express';
import UserService from '../service/user.service';
import { GenericHttpCallVerbs } from '../interface/generic-http-call-verbs';
import { GenericModel } from '../model/generic.model';
import winston from 'winston';

export default class UserController implements GenericHttpCallVerbs<GenericModel>{

    private userService: UserService;
    private root: string = '/users/';
    private router: Router;

    constructor(express: Application) {
        this.userService = new UserService();
        this.router = Router();
        express.use(this.root, this.router);
    }

    // logger = winston.createLogger({
    //     transports: [
    //         new winston.transports.Console()
    //     ]
    // });

    //  handler = (func: any) => (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         // this.logger.info('server.handler.begun');
    //         func(req, res, next);
    //     } catch(e){
    //         this.logger.error(e);
    //         res.send('Oh no, something did not go well! ' + e);
    //     }
    // };

    async get(req: Request, res: Response, next: NextFunction) {
        this.userService.get(req.query['id'])
            .then(
                (user) => res.send(user),
                )
            .catch((error)=>{throw error});
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        this.userService.getAll()
            .then(
                (resp) => { res.send(resp) },
                (error) => { throw error })
            .catch(next);
    }

    async post(req: Request, res: Response, next: NextFunction) {
        this.userService.post(req.body)
            .then(
                (resp) => { res.send(resp) },
                (error) => { throw error })
            .catch(next);
    }
    async put(req: Request, res: Response, next: NextFunction) {
        this.userService.put(req.query['id'], req.body)
            .then(
                (resp) => { res.send(resp) },
                (error) => { throw error })
            .catch(next);
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        this.userService.delete(req.query['id'])
            .then(
                (resp) => { res.send(resp) },
                (error) => { throw error })
            .catch(next);
    }

    init() {
        this.router.get('/',   this.get.bind(this));    
        this.router.get('/all',this.getAll.bind(this));
        this.router.post('/', this.post.bind(this));
        this.router.put('/', this.put.bind(this));
        this.router.delete('/', this.delete.bind(this));
    }

    // init() {
    //     this.router.get('/',   this.handler(this.get.bind(this))) ;
    //     this.router.get('/all', this.handler(this.getAll.bind(this)));
    //     this.router.post('/', this.handler(this.post.bind(this)));
    //     this.router.put('/', this.handler(this.put.bind(this)));
    //     this.router.delete('/', this.handler(this.delete.bind(this)));
    // }

    // async error (err: any, req: Request, res: Response, next: NextFunction) {
    //     // handle error
    //     console.log(err, req, res, next);
    // };
      
}
