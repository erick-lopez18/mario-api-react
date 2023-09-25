import { Character } from "../character.model";
import { Game } from "../../game/game.model";
import { ICharacterService } from "../interfaces/character.interface";
import { QueryOptions } from "../types/query-options.type";
import { CreateCharacterDto } from "../dto/create-character.dto";
export declare class CharacterService implements ICharacterService {
    private readonly characterRepository;
    constructor(characterRepository: typeof Character);
    create(payload: CreateCharacterDto): Promise<Character>;
    getAll(queryOptions?: QueryOptions): Promise<Character[]>;
    getOne(id: number, queryOptions?: QueryOptions): Promise<Character>;
    getAssociatedGames(id: number): Promise<Game[]>;
    getImage(id: number): Promise<Character>;
    update(id: number, payload: any): Promise<Character>;
    delete(id: number): Promise<number>;
}
