"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../core/database/database.module");
const character_service_1 = require("./services/character.service");
const uploader_1 = require("../../core/uploader/uploader");
const character_image_uploader_service_1 = require("./services/character-image-uploader.service");
const character_controller_1 = require("./character.controller");
const character_provider_1 = require("./character.provider");
const constants_1 = require("./constants");
const constants_2 = require("./constants");
let CharacterModule = class CharacterModule {
};
CharacterModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [character_controller_1.CharacterController],
        providers: [
            {
                provide: constants_1.CHARACTER_SERVICE,
                useClass: character_service_1.CharacterService,
            },
            {
                provide: constants_2.CHARACTER_IMAGE_UPLOADER,
                useClass: character_image_uploader_service_1.CharacterImageUploader,
            },
            uploader_1.Uploader,
            ...character_provider_1.characterProviders,
        ],
    })
], CharacterModule);
exports.CharacterModule = CharacterModule;
//# sourceMappingURL=character.module.js.map