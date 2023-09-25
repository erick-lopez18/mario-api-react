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
exports.CharacterController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_character_dto_1 = require("./dto/create-character.dto");
const update_character_dto_1 = require("./dto/update-character.dto");
const character_exists_pipe_1 = require("./pipes/character-exists.pipe");
const constants_1 = require("./constants");
let CharacterController = class CharacterController {
    constructor(characterService, characterImageUploader) {
        this.characterService = characterService;
        this.characterImageUploader = characterImageUploader;
    }
    async getAll(query, res) {
        const characters = await this.characterService.getAll(query);
        return res.json(characters);
    }
    async getOne(id, query, res) {
        const character = await this.characterService.getOne(id, query);
        return res.json(character);
    }
    async getCharacterGames(id, res) {
        const games = await this.characterService.getAssociatedGames(id);
        return res.json(games);
    }
    async getImage(id, res) {
        const url = await this.characterService.getImage(id);
        return res.json(url);
    }
    async upload(file, id, res) {
        const character = await this.characterImageUploader.addImage(id, file);
        return res.json(character);
    }
    async create(createCharDto, res) {
        const character = await this.characterService.create(createCharDto);
        return res.status(201).json(character);
    }
    async update(id, updateCharDto, res) {
        const character = await this.characterService.update(id, updateCharDto);
        return res.json(character);
    }
    async delete(id, res) {
        const deletedRecordId = await this.characterService.delete(id);
        return res.json(deletedRecordId);
    }
};
__decorate([
    common_1.Get("/"),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "getAll", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(1, common_1.Query()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "getOne", null);
__decorate([
    common_1.Get("/:id/games"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "getCharacterGames", null);
__decorate([
    common_1.Get("/:id/image"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "getImage", null);
__decorate([
    common_1.Post("/:id/image"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file")),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "upload", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "create", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_character_dto_1.UpdateCharacterDto, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "update", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, character_exists_pipe_1.CharacterExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CharacterController.prototype, "delete", null);
CharacterController = __decorate([
    common_1.Controller("characters"),
    __param(0, common_1.Inject(constants_1.CHARACTER_SERVICE)),
    __param(1, common_1.Inject(constants_1.CHARACTER_IMAGE_UPLOADER)),
    __metadata("design:paramtypes", [Object, Object])
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map