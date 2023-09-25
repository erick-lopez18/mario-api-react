import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { IGameService } from "../game.interface";
export declare class GameExistsPipe implements PipeTransform {
    private readonly gameService;
    constructor(gameService: IGameService);
    transform(value: number, metadata: ArgumentMetadata): Promise<number>;
}
