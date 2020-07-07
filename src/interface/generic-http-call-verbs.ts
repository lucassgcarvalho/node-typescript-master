import { NextFunction, Request, Response } from "express";
import { GenericCallVerbs } from "./generic-call-verbs";

export interface GenericHttpCallVerbs<T> extends GenericCallVerbs<T> {
    get(req?: Request, res?: Response, next?: NextFunction): T | void | T | Promise<T>;    
    getAll(req?: Request, res?: Response, next?: NextFunction): Array<T> | void;
    post(req?: Request, res?: Response, next?: NextFunction): T | void;
    put(req?: Request, res?: Response, next?: NextFunction): T | void;
    delete(req?: Request, res?: Response, next?: NextFunction): T | void;
}