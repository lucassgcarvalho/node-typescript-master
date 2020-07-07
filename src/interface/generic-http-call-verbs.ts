import { NextFunction, Request, Response } from "express";
import { GenericCallVerbs } from "./generic-call-verbs";

export interface GenericHttpCallVerbs<T> extends GenericCallVerbs<T> {
    get(req?: Request, res?: Response, next?: NextFunction): any;    
    getAll(req?: Request, res?: Response, next?: NextFunction): any;
    post(req?: Request, res?: Response, next?: NextFunction): any;
    put(req?: Request, res?: Response, next?: NextFunction): any;
    delete(req?: Request, res?: Response, next?: NextFunction): any;
}