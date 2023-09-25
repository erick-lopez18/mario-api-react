"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameProviders = void 0;
const game_model_1 = require("./game.model");
const constants_1 = require("../../core/constants");
exports.gameProviders = [
    {
        provide: constants_1.GAME_REPOSITORY,
        useValue: game_model_1.Game,
    },
];
//# sourceMappingURL=game.providers.js.map