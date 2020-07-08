import { Application, NextFunction, Request, Response, Router } from 'express';
import UserService from '../service/user.service';

export default class CPUController{

    private root: string = '/cpu/';
    private router: Router;

    constructor(express: Application) {
        this.router = Router();
        express.use(this.root, this.router);
    }

    cpuBound(req: Request, res: Response, next: NextFunction) {
        const key = Math.random() < 0.5 ? 'ninjaturtles' : 'powerrangers'
        const date = Date.now() + ''
    }
    
      memoryBound(req: Request, res: Response, next: NextFunction) {
        const large = Buffer.alloc(10 * 1024 * 1024, 'X')
        setTimeout(() => {
          const len = large.length  // close over the Buffer for 1s to try to foil V8's optimizations and bloat memory
          console.log(len)
        }, 1000).unref()
        res.send(` Allocated ${large.length} MB buffer `)
      }
    
      ioBound(req: Request, res: Response, next: NextFunction) {
        setTimeout(function SimulateDb() {
          res.send('Got response from fake db!')
        }, 300).unref()
      }


    init() {
        this.router.get('/', this.cpuBound.bind(this));
        this.router.get('/memory', this.memoryBound.bind(this));
        this.router.get('/io',   this.ioBound.bind(this) );
    }
}
