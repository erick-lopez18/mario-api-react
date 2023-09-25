import { Model } from "sequelize-typescript";
import { Platform } from "../platform/platform.model";
import { Character } from "../character/character.model";
export declare class Game extends Model {
    title: string;
    year: number;
    platformId: number;
    characters: Character[];
    platform: Platform;
}
