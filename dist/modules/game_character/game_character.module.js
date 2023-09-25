"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCharacterModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../core/database/database.module");
const game_character_service_1 = require("./game_character.service");
const constants_1 = require("./constants");
const game_character_providers_1 = require("./game_character.providers");
let GameCharacterModule = class GameCharacterModule {
};
GameCharacterModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        exports: [constants_1.GAME_CHARACTER_SERVICE],
        providers: [
            {
                provide: constants_1.GAME_CHARACTER_SERVICE,
                useClass: game_character_service_1.GameCharacterService,
            },
            ...game_character_providers_1.gameCharacterProviders,
        ],
    })
], GameCharacterModule);
exports.GameCharacterModule = GameCharacterModule;
//# sourceMappingURL=game_character.module.js.map