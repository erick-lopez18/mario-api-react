import { IUploader } from "src/core/interfaces/uploader.interface";
import { ICharacterImageUploader } from "../interfaces/character-image-uploader.interface";
import { File } from "../../../core/types/file.type";
import { ICharacterService } from "../interfaces/character.interface";
export declare class CharacterImageUploader implements ICharacterImageUploader {
    private readonly characterService;
    private readonly uploader;
    constructor(characterService: ICharacterService, uploader: IUploader);
    addImage(id: number, file: File): Promise<any>;
}
