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
  Patch
} from '@nestjs/common';
import { Gathering } from './gathering.entity';
import { GatheringService } from './gathering.service';
import { CreateGatheringDto } from './dto/create-gathering';
import { GatheringTypeValidation } from '../../common/pipe/gathering-type-validation';
import { GatheringType } from './gathering-type.enum';
import { GetUser } from 'src/common/decorators/get-user.decorators';
import { Users } from '../users/users.entity';
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
  @UsePipes(ValidationPipe)
  createGathering(
    @GetUser() user: Users,
    @Body() createGatheringDto: CreateGatheringDto
  ): Promise<Gathering> {
    return this.gatheringService.createGathering(createGatheringDto, user);
  }
  //   @Put('/:id')
  //   updateGathering(@Param(id)): Promise<void> {
  //     return this.gatheringService.updateUser({

  //     });
  //   }
  @Patch('/:id/type')
  updateGatheringType(
    @Param('id') id: string,
    @Body('type', GatheringTypeValidation) type: GatheringType
  ) {
    return;
  }
  @Delete('/:id')
  deleteGathering(@Param('id') id: number): Promise<void> {
    return this.gatheringService.deleteGathering(id);
  }
}
