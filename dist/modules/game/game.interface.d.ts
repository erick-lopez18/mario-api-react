import { IDataStoreService } from "src/core/interfaces/data-store-service.interface";
export interface IGameService extends IDataStoreService {
    getAssociatedPlatform(id: number, ...args: any[]): Promise<any>;
    addCharacter(payload: any, ...args: any[]): Promise<any>;
}
