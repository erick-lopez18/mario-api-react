"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platformProviders = void 0;
const platform_model_1 = require("./platform.model");
const constants_1 = require("../../core/constants");
exports.platformProviders = [
    {
        provide: constants_1.PLATFORM_REPOSITORY,
        useValue: platform_model_1.Platform,
    },
];
//# sourceMappingURL=platform.providers.js.map