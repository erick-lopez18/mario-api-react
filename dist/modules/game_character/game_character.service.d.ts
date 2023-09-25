import { GameCharacter } from "./game_character.model";
import { IGameCharacterService } from "./game_character.interface";
import { GameCharacterDto } from "./game-character.dto";
export declare class GameCharacterService implements IGameCharacterService {
    private readonly gameCharacterRepository;
    constructor(gameCharacterRepository: typeof GameCharacter);
    addCharacterToGame(payload: GameCharacterDto): Promise<GameCharacter>;
}
