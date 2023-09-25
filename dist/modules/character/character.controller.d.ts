/// <reference types="multer" />
import { Response } from "express";
import { ICharacterService } from "./interfaces/character.interface";
import { ICharacterImageUploader } from "./interfaces/character-image-uploader.interface";
import { QueryOptions } from "./types/query-options.type";
import { CreateCharacterDto } from "./dto/create-character.dto";
import { UpdateCharacterDto } from "./dto/update-character.dto";
export declare class CharacterController {
    private readonly characterService;
    private readonly characterImageUploader;
    constructor(characterService: ICharacterService, characterImageUploader: ICharacterImageUploader);
    getAll(query: QueryOptions, res: Response): Promise<Response<any, Record<string, any>>>;
    getOne(id: number, query: QueryOptions, res: Response): Promise<Response<any, Record<string, any>>>;
    getCharacterGames(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    getImage(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    upload(file: Express.Multer.File, id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    create(createCharDto: CreateCharacterDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: number, updateCharDto: UpdateCharacterDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
