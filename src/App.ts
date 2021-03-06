import * as bodyParser from 'body-parser';
import express from 'express';
import logger from 'morgan';
import UserController from './controller/user.controller';
import CPUController from './controller/cpu.controller';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.configDB();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    // this.express.use(morgan('combined'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    
  }

  configDB() {}

  // Configure API endpoints.
  private routes(): void {
    this.initRoutes();
  }

  initRoutes() {
    this.userRouter();
  }

  private userRouter() {
    new UserController(this.express).init();
    new CPUController(this.express).init();
  }
}

export default new App().express;