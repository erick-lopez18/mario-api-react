import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { ICharacterService } from "../interfaces/character.interface";
export declare class CharacterExistsPipe implements PipeTransform {
    private readonly characterService;
    constructor(characterService: ICharacterService);
    transform(value: number, metadata: ArgumentMetadata): Promise<number>;
}
