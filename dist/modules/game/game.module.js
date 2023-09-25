"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../core/database/database.module");
const game_controller_1 = require("./game.controller");
const game_service_1 = require("./game.service");
const constants_1 = require("./constants");
const game_character_module_1 = require("../game_character/game_character.module");
const game_providers_1 = require("./game.providers");
let GameModule = class GameModule {
};
GameModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, game_character_module_1.GameCharacterModule],
        controllers: [game_controller_1.GameController],
        providers: [
            {
                provide: constants_1.GAME_SERVICE,
                useClass: game_service_1.GameService,
            },
            ...game_providers_1.gameProviders,
        ],
    })
], GameModule);
exports.GameModule = GameModule;
//# sourceMappingURL=game.module.js.map