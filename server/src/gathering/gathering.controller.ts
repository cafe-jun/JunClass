import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
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
  getByIdGathering(): Promise<Gathering> {
    return this.gatheringService.getGatheringById();
  }
  @Post('/')
  createGathering(): Promise<Gather> {
    return this.gatheringService.createGathering();
  }
  @Put('/:id')
  updateGathering(): Promise<void> {
    return this.gatheringService.updateUser();
  }
  @Delete('/:id')
  deleteGathering(): Promise<void> {}
}
