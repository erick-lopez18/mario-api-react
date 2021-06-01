import {
  Controller,
  Get,
  Inject,
  Res,
  Query,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from "@nestjs/common"
import { Response } from "express"
import { IPlatformService } from "../interfaces/platformService.interface"
import { QueryOptionsDto } from "../dto/queryOptions.dto"

@Controller("platforms")
export class PlatformController {
  constructor(
    @Inject("PLATFORM_SERVICE")
    private readonly platformService: IPlatformService,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryOptionsDto, @Res() res: Response) {
    try {
      const platforms = await this.platformService.getAll(query)
      return res.json(platforms)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get("/:id")
  public async getOne(
    @Param("id", ParseIntPipe) id: number,
    @Query() query: QueryOptionsDto,
    @Res() res: Response,
  ) {
    try {
      const platform = await this.platformService.getOne(id, query)
      return res.json(platform)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
