import { CreateGatheringDto } from './dto/create-gathering';
import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from './gathering.entity';
import { Users } from '../users/users.entity';

@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {
  async createGathering(
    createGatheringDto: CreateGatheringDto,
    user: string
  ): Promise<Gathering> {
    console.log(
      `${JSON.stringify(createGatheringDto)},${JSON.stringify(user)}`
    );
    const { thumbnail, title, type } = createGatheringDto;
    const gathering = this.create({
      type: type,
      thumbnail: thumbnail,
      title: title
    });
    return gathering;
  }
}
