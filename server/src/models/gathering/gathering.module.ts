import { Module } from '@nestjs/common';
import { GatheringController } from './gathering.controller';
import { GatheringService } from './gathering.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatheringRepository } from './gathering.repostiory';
import { UsersRepository } from '../users/users.repostiory';

@Module({
  imports: [TypeOrmModule.forFeature([GatheringRepository, UsersRepository])],
  controllers: [GatheringController],
  providers: [GatheringService]
})
export class GatheringModule {}
