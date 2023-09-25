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
exports.PlatformController = void 0;
const common_1 = require("@nestjs/common");
const query_options_type_1 = require("./types/query-options.type");
const create_platform_dto_1 = require("./dto/create-platform.dto");
const platform_exists_pipe_1 = require("./pipes/platform-exists.pipe");
const constants_1 = require("./constants");
const data_store_service_interface_1 = require("../../core/interfaces/data-store-service.interface");
let PlatformController = class PlatformController {
    constructor(platformService) {
        this.platformService = platformService;
    }
    async getAll(query, res) {
        const platforms = await this.platformService.getAll(query);
        return res.json(platforms);
    }
    async getOne(id, query, res) {
        const platform = await this.platformService.getOne(id, query);
        return res.json(platform);
    }
    async createPlatform(createPlatformDto, res) {
        const platform = await this.platformService.create(createPlatformDto);
        return res.json(platform);
    }
    async update(id, updatePlatform, res) {
        const platform = await this.platformService.update(id, updatePlatform);
        return res.json(platform);
    }
    async delete(id, res) {
        const platformId = await this.platformService.delete(id);
        return res.json(platformId);
    }
};
__decorate([
    common_1.Get("/"),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_options_type_1.QueryOptions, Object]),
    __metadata("design:returntype", Promise)
], PlatformController.prototype, "getAll", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, platform_exists_pipe_1.PlatformExistsPipe)),
    __param(1, common_1.Query()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, query_options_type_1.QueryOptions, Object]),
    __metadata("design:returntype", Promise)
], PlatformController.prototype, "getOne", null);
__decorate([
    common_1.Post("/"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_platform_dto_1.CreatePlatformDto, Object]),
    __metadata("design:returntype", Promise)
], PlatformController.prototype, "createPlatform", null);
__decorate([
    common_1.Put("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, platform_exists_pipe_1.PlatformExistsPipe)),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_platform_dto_1.CreatePlatformDto, Object]),
    __metadata("design:returntype", Promise)
], PlatformController.prototype, "update", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id", common_1.ParseIntPipe, platform_exists_pipe_1.PlatformExistsPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlatformController.prototype, "delete", null);
PlatformController = __decorate([
    common_1.Controller("platforms"),
    __param(0, common_1.Inject(constants_1.PLATFORM_SERVICE)),
    __metadata("design:paramtypes", [Object])
], PlatformController);
exports.PlatformController = PlatformController;
//# sourceMappingURL=platform.controller.js.map