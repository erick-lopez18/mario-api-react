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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterImageUploader = void 0;
const common_1 = require("@nestjs/common");
const uploader_interface_1 = require("../../../core/interfaces/uploader.interface");
const uploader_1 = require("../../../core/uploader/uploader");
const constants_1 = require("../constants");
let CharacterImageUploader = class CharacterImageUploader {
    constructor(characterService, uploader) {
        this.characterService = characterService;
        this.uploader = uploader;
    }
    async addImage(id, file) {
        try {
            const image_url = await this.uploader.upload(file, "image/png");
            const payload = { image_url };
            return await this.characterService.update(id, payload);
        }
        catch (err) {
            Promise.reject(err);
        }
    }
};
CharacterImageUploader = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CHARACTER_SERVICE)),
    __param(1, common_1.Inject(uploader_1.Uploader)),
    __metadata("design:paramtypes", [Object, Object])
], CharacterImageUploader);
exports.CharacterImageUploader = CharacterImageUploader;
//# sourceMappingURL=character-image-uploader.service.js.map