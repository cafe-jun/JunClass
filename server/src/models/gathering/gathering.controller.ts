import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  Patch,
  UseFilters,
  UseGuards
} from '@nestjs/common';
import { Gathering } from './gathering.entities';
import { GatheringService } from './gathering.service';
import { CreateGatheringDto } from './dto/create-gathering.dto';
import { GatheringTypeValidation } from '../../common/pipe/gathering-type-validation';
import { GatheringType } from './gathering-type.enum';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';

// @UseGuards(JwtAuthGuard)
@UseFilters(HttpExceptionFilter)
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
  // @UsePipes(ValidationPipe)
  async createGathering(@Body() dto: CreateGatheringDto): string {
    try {
      await this.gatheringService.createGathering(dto.toEntity());
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/:id/type')
  updateGatheringType(
    @Param('id') id: string,
    @Body('type', GatheringTypeValidation) type: GatheringType
  ) {
    return;
  }
  @Delete('/:id')
  @UseFilters(new HttpExceptionFilter())
  deleteGathering(@Param('id') id: string): Promise<void> {
    return this.gatheringService.deleteGathering(id);
  }
}
