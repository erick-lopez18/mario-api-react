"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../core/database/database.module");
const platform_service_1 = require("./platform.service");
const platform_controller_1 = require("./platform.controller");
const platform_providers_1 = require("./platform.providers");
const constants_1 = require("./constants");
let PlatformModule = class PlatformModule {
};
PlatformModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [platform_controller_1.PlatformController],
        providers: [
            {
                provide: constants_1.PLATFORM_SERVICE,
                useClass: platform_service_1.PlatformService,
            },
            ...platform_providers_1.platformProviders,
        ],
    })
], PlatformModule);
exports.PlatformModule = PlatformModule;
//# sourceMappingURL=platform.module.js.map