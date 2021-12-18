import { Module } from '@nestjs/common';
import { GatheringController } from './gathering.controller';
import { GatheringService } from './gathering.service';

@Module({
  controllers: [GatheringController],
  providers: [GatheringService]
})
export class GatheringModule {}
