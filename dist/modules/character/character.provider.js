"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterProviders = void 0;
const character_model_1 = require("./character.model");
const constants_1 = require("../../core/constants");
exports.characterProviders = [
    {
        provide: constants_1.CHARACTER_REPOSITORY,
        useValue: character_model_1.Character,
    },
];
//# sourceMappingURL=character.provider.js.map