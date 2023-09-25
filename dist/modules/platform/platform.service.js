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
exports.PlatformService = void 0;
const common_1 = require("@nestjs/common");
const game_model_1 = require("../game/game.model");
const constants_1 = require("../../core/constants");
const data_store_service_interface_1 = require("../../core/interfaces/data-store-service.interface");
let PlatformService = class PlatformService {
    constructor(platformRepository) {
        this.platformRepository = platformRepository;
    }
    async create(payload) {
        return await this.platformRepository.create(payload);
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
        return await this.platformRepository.findAll(options);
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
        return await this.platformRepository.findOne(options);
    }
    async update(id, payload) {
        const platform = await this.platformRepository.findOne({
            where: {
                id,
            },
        });
        for (let key in payload) {
            if (key in payload) {
                platform[key] = payload[key];
            }
        }
        await platform.save();
        await platform.reload();
        return platform;
    }
    async delete(id) {
        const platform = await this.platformRepository.findOne({
            where: {
                id,
            },
        });
        await platform.destroy();
        return platform.id;
    }
};
PlatformService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.PLATFORM_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], PlatformService);
exports.PlatformService = PlatformService;
//# sourceMappingURL=platform.service.js.map