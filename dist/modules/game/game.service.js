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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const platform_model_1 = require("../platform/platform.model");
const character_model_1 = require("../character/character.model");
const constants_1 = require("../../core/constants");
const constants_2 = require("../game_character/constants");
let GameService = class GameService {
    constructor(gameRepository, gameCharacterService) {
        this.gameRepository = gameRepository;
        this.gameCharacterService = gameCharacterService;
    }
    async create(payload) {
        return await this.gameRepository.create(payload);
    }
    async getAll(queryOptions) {
        const options = {
            order: [
                [
                    queryOptions.order_term ? queryOptions.order_term : "id",
                    queryOptions.order_by ? queryOptions.order_by : "ASC",
                ],
            ],
        };
        if (queryOptions) {
            const { include_characters, include_platform } = queryOptions;
            if (include_characters && include_platform) {
                options["include"] = [
                    {
                        model: character_model_1.Character,
                    },
                    {
                        model: platform_model_1.Platform,
                    },
                ];
            }
            else if (include_characters) {
                options["include"] = character_model_1.Character;
            }
            else if (include_platform) {
                options["include"] = platform_model_1.Platform;
            }
            if (queryOptions.limit) {
                options["limit"] = queryOptions.limit;
            }
            if (queryOptions.offset) {
                options["offset"] = queryOptions.offset;
            }
        }
        return await this.gameRepository.findAll(options);
    }
    async getOne(id, queryOptions) {
        const options = {
            where: {
                id,
            },
        };
        if (queryOptions) {
            const { include_characters, include_platform } = queryOptions;
            if (include_characters && include_platform) {
                options["include"] = [
                    {
                        model: character_model_1.Character,
                    },
                    {
                        model: platform_model_1.Platform,
                    },
                ];
            }
            else if (include_characters) {
                options["include"] = character_model_1.Character;
            }
            else if (include_platform) {
                options["include"] = platform_model_1.Platform;
            }
        }
        return await this.gameRepository.findOne(options);
    }
    async getAssociatedPlatform(id) {
        const { platform } = await this.gameRepository.findOne({
            where: {
                id,
            },
            include: platform_model_1.Platform,
        });
        return platform;
    }
    async addCharacter(payload) {
        const { gameId } = payload;
        await this.gameCharacterService.addCharacterToGame(payload);
        return await this.gameRepository.findOne({
            where: {
                id: gameId,
            },
            include: character_model_1.Character,
        });
    }
    async update(id, payload) {
        const game = await this.gameRepository.findOne({
            where: {
                id,
            },
        });
        for (let key in payload) {
            if (key in payload) {
                game[key] = payload[key];
            }
        }
        await game.save();
        await game.reload();
        return game;
    }
    async delete(id) {
        const game = await this.gameRepository.findOne({
            where: {
                id,
            },
        });
        await game.destroy();
        return game.id;
    }
};
GameService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.GAME_REPOSITORY)),
    __param(1, common_1.Inject(constants_2.GAME_CHARACTER_SERVICE)),
    __metadata("design:paramtypes", [Object, Object])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map