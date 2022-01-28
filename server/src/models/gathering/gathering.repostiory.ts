import { CreateGatheringDto } from './dto/create-gathering.dto';
import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from './gathering.entities';
import { Users } from '../users/users.entities';

@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {
  async createGathering(gathering: Gathering, userId: string): Promise<void> {
    const { thumbnail, title, type } = gathering;
    await this.create({
      type: type,
      thumbnail: thumbnail,
      title: title,
      users: {
        id: userId
      }
    });
    await this.save(gathering);
  }
}
