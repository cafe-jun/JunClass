import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { Gathering } from 'src/entity/gathering.entity';
import { GatheringService } from './gathering.service';
@Controller('gathering')
export class GatheringController {
  constructor(private gatheringService: GatheringService) {}
  @Get('/')
  getGatheringAll(): Promise<Gathering[]> {
    return this.gatheringService.getAllGathering();
  }
  @Get('/:id')
  getByIdGathering(@Param('id') id: number): Promise<Gathering> {
    return this.gatheringService.getGatheringById(id);
  }
  @Post('/')
  createGathering(
    @Body('title') title: string,
    @Body('thumbnail') thumbnail: string,
    @Body('type') type: string
  ): Promise<Gathering> {
    return this.gatheringService.createGathering({ title, thumbnail, type });
  }
  //   @Put('/:id')
  //   updateGathering(@Param(id)): Promise<void> {
  //     return this.gatheringService.updateUser({

  //     });
  //   }
  @Delete('/:id')
  deleteGathering(@Param('id') id: number): Promise<void> {
    return this.gatheringService.deleteGathering(id);
  }
}
