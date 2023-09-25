"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const character_model_1 = require("../../modules/character/character.model");
const game_model_1 = require("../../modules/game/game.model");
const game_character_model_1 = require("../../modules/game_character/game_character.model");
const platform_model_1 = require("../../modules/platform/platform.model");
const constants_1 = require("../constants");
const models = [character_model_1.Character, game_model_1.Game, game_character_model_1.GameCharacter, platform_model_1.Platform];
const devConfig = {
    provide: constants_1.SEQUELIZE,
    useFactory: async () => {
        const sequelize = new sequelize_typescript_1.Sequelize({
            dialect: "sqlite",
            storage: "./dev",
            logging: false,
        });
        sequelize.addModels(models);
        await sequelize.sync();
        return sequelize;
    },
};
const prodConfig = {
    provide: "SEQUELIZE",
    useFactory: async () => {
        const sequelize = new sequelize_typescript_1.Sequelize(process.env.DATABASE_URL, {
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
        });
        sequelize.addModels(models);
        await sequelize.sync();
        return sequelize;
    },
};
exports.databaseProviders = [
    process.env.NODE_ENV === "production" ? prodConfig : devConfig,
];
//# sourceMappingURL=database.providers.js.map