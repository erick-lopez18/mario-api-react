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
exports.GameCharacter = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const game_model_1 = require("../game/game.model");
const character_model_1 = require("../character/character.model");
let GameCharacter = class GameCharacter extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => game_model_1.Game),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], GameCharacter.prototype, "gameId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => character_model_1.Character),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], GameCharacter.prototype, "characterId", void 0);
GameCharacter = __decorate([
    sequelize_typescript_1.Table
], GameCharacter);
exports.GameCharacter = GameCharacter;
//# sourceMappingURL=game_character.model.js.map