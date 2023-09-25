import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { IDataStoreService } from "src/core/interfaces/data-store-service.interface";
export declare class PlatformExistsPipe implements PipeTransform {
    private readonly platformService;
    constructor(platformService: IDataStoreService);
    transform(value: number, metadata: ArgumentMetadata): Promise<number>;
}
