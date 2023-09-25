export interface IDataStoreService {
    create(data: any, ...args: any[]): Promise<any>;
    update(id: any, data: any, ...args: any[]): Promise<any>;
    getOne(id: any, ...args: any[]): Promise<any>;
    getAll(arg?: any, ...args: any[]): Promise<any>;
    delete(id: any, ...args: any[]): Promise<any>;
}
