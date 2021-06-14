import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { GameModule } from "./lib/game/game.module"
import { PlatformModule } from "./lib/platform/platform.module"
import { CharacterModule } from "./lib/character/character.module"
import { GameCharacterModule } from "./lib/game_character/game_character.module"
import { UploaderModule } from "./lib/uploader/uploader.module"
import { config } from "./database/config"

const env = process.env.NODE_ENV || "development"

const dbconfig: object = {
  dialect: "sqlite",
  storage: "./dev",
  logging: false,
  autoLoadModels: true,
}

const postGresConfig: object = {
  url: process.env.DATABASE_URL,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  autoLoadModels: true,
}

@Module({
  imports: [
    SequelizeModule.forRootAsync(postGresConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    // SequelizeModule.forRoot(postGresConfig),
    GameModule,
    PlatformModule,
    CharacterModule,
    GameCharacterModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
