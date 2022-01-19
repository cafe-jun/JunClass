import { Module } from '@nestjs/common';
import { GatheringController } from './gathering.controller';
import { GatheringService } from './gathering.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatheringRepository } from './gathering.repostiory';
import { UsersRepository } from '../users/users.repostiory';
import { JwtService } from '../jwt/jwt.service';

@Module({
  imports: [TypeOrmModule.forFeature([GatheringRepository, UsersRepository])],
  controllers: [GatheringController],
  providers: [GatheringService, JwtService]
})
export class GatheringModule {}
