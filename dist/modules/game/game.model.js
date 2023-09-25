"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const platform_model_1 = require("../platform/platform.model");
const character_model_1 = require("../character/character.model");
const game_character_model_1 = require("../game_character/game_character.model");
let Game = class Game extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Game.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Game.prototype, "year", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => platform_model_1.Platform),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Game.prototype, "platformId", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => character_model_1.Character, () => game_character_model_1.GameCharacter),
    __metadata("design:type", Array)
], Game.prototype, "characters", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => platform_model_1.Platform),
    __metadata("design:type", platform_model_1.Platform)
], Game.prototype, "platform", void 0);
Game = __decorate([
    sequelize_typescript_1.Table
], Game);
exports.Game = Game;
//# sourceMappingURL=game.model.js.map