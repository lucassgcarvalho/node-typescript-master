import { NextFunction, Response, Request } from "express";

export interface GenericHttpCallVerbs<T> {
    get(req?: Request, res?: Response, next?: NextFunction): T | void | T | Promise<T>;    
    
    getAll(): Array<T> | void;

    post(): T | void;

    put(): T | void;

    delete(): T | void;
}