import { Response } from "express";
import { IGameService } from "./game.interface";
import { QueryStringObject } from "./types/query-string.type";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
export declare class GameController {
    private readonly gameService;
    constructor(gameService: IGameService);
    getAll(query: QueryStringObject, res: Response): Promise<Response<any, Record<string, any>>>;
    getOne(query: QueryStringObject, id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    getGamePlatform(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    create(createGameDto: CreateGameDto, res: Response): Promise<Response<any, Record<string, any>>>;
    addCharacter(id: number, body: {
        characterId: number;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: number, updateGame: UpdateGameDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
