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
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const game_model_1 = require("../../game/game.model");
const constants_1 = require("../../../core/constants");
let CharacterService = class CharacterService {
    constructor(characterRepository) {
        this.characterRepository = characterRepository;
    }
    async create(payload) {
        return await this.characterRepository.create(Object.assign({}, payload));
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
            if (queryOptions.include_games) {
                options["include"] = game_model_1.Game;
            }
            if (queryOptions.limit) {
                options["limit"] = queryOptions.limit;
            }
            if (queryOptions.offset) {
                options["offset"] = queryOptions.offset;
            }
        }
        return await this.characterRepository.findAll(options);
    }
    async getOne(id, queryOptions) {
        const options = {
            where: {
                id,
            },
        };
        if (queryOptions) {
            if (queryOptions.include_games) {
                options["include"] = game_model_1.Game;
            }
        }
        return await this.characterRepository.findOne(options);
    }
    async getAssociatedGames(id) {
        const { games } = await this.characterRepository.findOne({
            where: {
                id,
            },
            include: game_model_1.Game,
        });
        return games;
    }
    async getImage(id) {
        return await this.characterRepository.findOne({
            where: {
                id,
            },
            attributes: ["image_url"],
        });
    }
    async update(id, payload) {
        const character = await this.characterRepository.findOne({
            where: {
                id,
            },
        });
        for (let key in payload) {
            if (key in payload) {
                character[key] = payload[key];
            }
        }
        await character.save();
        await character.reload();
        return character;
    }
    async delete(id) {
        const character = await this.characterRepository.findOne({
            where: {
                id,
            },
        });
        await character.destroy();
        return character.id;
    }
};
CharacterService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CHARACTER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map