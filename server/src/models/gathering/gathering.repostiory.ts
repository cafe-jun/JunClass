import { CreateGatheringDto } from './dto/create-gathering.dto';
import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from './gathering.entities';
import { Users } from '../users/users.entities';
import { UseFilters, HttpException } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

// @UseFilters(HttpExceptionFilter)
@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {
  async createGathering(gathering: Gathering): Promise<void> {
    try {
      await this.save(gathering);
    } catch (error) {
      console.log(error);
      // npm// new HttpExceptionFilter('')
    }
  }
}
