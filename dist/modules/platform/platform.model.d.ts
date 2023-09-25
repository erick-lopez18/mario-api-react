import { Model } from "sequelize-typescript";
import { Game } from "../game/game.model";
export declare class Platform extends Model {
    name: string;
    year: number;
    games: Game[];
}
