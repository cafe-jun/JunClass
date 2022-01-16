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
import { CreateGatheringDto } from './dto/create-gathering';
import { GatheringTypeValidation } from '../../common/pipe/gathering-type-validation';
import { GatheringType } from './gathering-type.enum';
import { GetUser } from 'src/common/decorators/get-user.decorators';
import { Users } from '../users/users.entities';
import { HttpExceptionFilter } from '../../exceptions/http-exception.filter';
// import { AuthGuard } from '@nestjs/passport';
import { SignedInGurad } from '../../common/gurad/signed-in.guard';
import { JwtAuthGuard } from 'src/common/gurad/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
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
  @UsePipes(ValidationPipe)
  createGathering(
    @Body('userId') userId: string,
    @Body() createGatheringDto: CreateGatheringDto
  ): Promise<Gathering> {
    return this.gatheringService.createGathering(createGatheringDto, userId);
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
  @UseFilters(new HttpExceptionFilter())
  deleteGathering(@Param('id') id: string): Promise<void> {
    return this.gatheringService.deleteGathering(id);
  }
}
