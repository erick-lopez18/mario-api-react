import { Platform } from "./platform.model";
import { QueryOptions } from "./types/query-options.type";
import { CreatePlatformDto } from "./dto/create-platform.dto";
import { UpdatePlatformDto } from "./dto/update-platform.dto";
import { IDataStoreService } from "src/core/interfaces/data-store-service.interface";
export declare class PlatformService implements IDataStoreService {
    private readonly platformRepository;
    constructor(platformRepository: typeof Platform);
    create(payload: CreatePlatformDto): Promise<Platform>;
    getAll(queryOptions?: QueryOptions): Promise<Platform[]>;
    getOne(id: number, queryOptions?: QueryOptions): Promise<Platform>;
    update(id: number, payload: UpdatePlatformDto): Promise<Platform>;
    delete(id: number): Promise<number>;
}
