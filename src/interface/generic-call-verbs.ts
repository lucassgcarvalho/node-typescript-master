
export interface GenericCallVerbs<T> {
    get(options?: any): any;
    getAll(options?: any): any;
    post(body?: any, options?: any): any;
    put(id?: any, options?: any): any;
    delete(id?: any, options?: any): any;
}