import { Game } from "./game.model";
import { Platform } from "../platform/platform.model";
import { IGameService } from "./game.interface";
import { QueryOption } from "./types/query-option.type";
import { CreateGameDto } from "./dto/create-game.dto";
export declare class GameService implements IGameService {
    private gameRepository;
    private gameCharacterService;
    constructor(gameRepository: typeof Game, gameCharacterService: any);
    create(payload: CreateGameDto): Promise<Game>;
    getAll(queryOptions?: QueryOption): Promise<Game[]>;
    getOne(id: number, queryOptions?: QueryOption): Promise<Game>;
    getAssociatedPlatform(id: number): Promise<Platform>;
    addCharacter(payload: any): Promise<Game>;
    update(id: number, payload: any): Promise<Game>;
    delete(id: number): Promise<number>;
}
