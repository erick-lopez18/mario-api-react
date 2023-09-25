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
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const create_game_dto_1 = require("./dto/create-game.dto");
const update_game_dto_1 = require("./dto/update-game.dto");
const game_exists_pipe_1 = require("./pipes/game-exists.pipe");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    async getAll(query, res) {
        const games = await this.gameService.getAll(query);
        return res.json(games);
    }
    async getOne(query, id, res) {
        const game = await this.gameService.getOne(id, query);
        return res.json(game);
    }
    async getGamePlatform(id, res) {
        const platform = await this.gameService.getAssociatedPlatform(id);
        return res.json(platform);
    }
    async create(createGameDto, res) {
        const game = await this.gameService.create(createGameDto);
        return res.status(201).json(game);
    }
    async addCharacter(id, body, res) {
        const payload = {
            gameId: id,
            characterId: body.characterId,
        };
        const gameWithChars = await this.gameService.addCharacter(payload);
        return res.status(201).json(gameWithChars);
    }
    async update(id, updateGame, res) {
        const game = await this.gameService.update(id, updateGame);
        return res.json(game);
    }
    async delete(id, res) {
        const gameId = await this.gameService.delete(id);
        return res.json(gameId);
    }
};
__decorate([
    common_1.Get("/"),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getAll", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Query()),
    __param(1, common_1.Param("id", common_1.ParseIntPipe, game_exists_pipe_1.GameExistsPipe)),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getOne", null);
__decorate([
    common_1.Get("/:id/platform"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, game_exists_pipe_1.GameExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getGamePlatform", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_game_dto_1.CreateGameDto, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "create", null);
__decorate([
    common_1.Post("/:id/characters"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, game_exists_pipe_1.GameExistsPipe)),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "addCharacter", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, game_exists_pipe_1.GameExistsPipe)),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_game_dto_1.UpdateGameDto, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "update", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, game_exists_pipe_1.GameExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "delete", null);
GameController = __decorate([
    common_1.Controller("games"),
    __param(0, common_1.Inject(constants_1.GAME_SERVICE)),
    __metadata("design:paramtypes", [Object])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map