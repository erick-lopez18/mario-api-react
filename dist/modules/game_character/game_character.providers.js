"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameCharacterProviders = void 0;
const game_character_model_1 = require("./game_character.model");
const constants_1 = require("../../core/constants");
exports.gameCharacterProviders = [
    {
        provide: constants_1.GAME_CHARACTER_REPOSITORY,
        useValue: game_character_model_1.GameCharacter,
    },
];
//# sourceMappingURL=game_character.providers.js.map