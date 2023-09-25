import { Model } from "sequelize-typescript";
import { Game } from "../game/game.model";
export declare class Character extends Model {
    name: string;
    year_released: number;
    image_url: string;
    debut_game: number;
    games: Game[];
}
