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
exports.Character = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const game_character_model_1 = require("../game_character/game_character.model");
let Character = class Character extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Character.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Character.prototype, "year_released", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Character.prototype, "image_url", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => game_model_1.Game),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Character.prototype, "debut_game", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => game_model_1.Game, () => game_character_model_1.GameCharacter),
    __metadata("design:type", Array)
], Character.prototype, "games", void 0);
Character = __decorate([
    sequelize_typescript_1.Table
], Character);
exports.Character = Character;
//# sourceMappingURL=character.model.js.map