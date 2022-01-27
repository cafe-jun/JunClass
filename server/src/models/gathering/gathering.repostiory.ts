import { CreateGatheringDto } from './dto/create-gathering.dto';
import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from './gathering.entities';
import { Users } from '../users/users.entities';

@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {
  async createGathering(
    createGatheringDto: CreateGatheringDto,
    userId: string
  ): Promise<Gathering> {
    const { thumbnail, title, type } = createGatheringDto;
    const gathering = this.create({
      type: type,
      thumbnail: thumbnail,
      title: title,
      users: {
        id: userId
      }
    });
    await this.save(gathering);
    return gathering;
  }
}
