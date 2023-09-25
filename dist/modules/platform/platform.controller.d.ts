import { Response } from "express";
import { QueryOptions } from "./types/query-options.type";
import { CreatePlatformDto } from "./dto/create-platform.dto";
import { IDataStoreService } from "src/core/interfaces/data-store-service.interface";
export declare class PlatformController {
    private readonly platformService;
    constructor(platformService: IDataStoreService);
    getAll(query: QueryOptions, res: Response): Promise<Response<any, Record<string, any>>>;
    getOne(id: number, query: QueryOptions, res: Response): Promise<Response<any, Record<string, any>>>;
    createPlatform(createPlatformDto: CreatePlatformDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: number, updatePlatform: CreatePlatformDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
