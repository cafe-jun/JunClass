import { Injectable, NotFoundException } from '@nestjs/common';
import { GatheringRepository } from './gathering.repostiory';
import { Gathering } from './gathering.entity';
import { CreateGatheringDto } from './dto/create-gathering';
import { InjectRepository } from '@nestjs/typeorm';
import { GatheringType } from './gathering-type.enum';
import { Users } from '../users/users.entity';
@Injectable()
export class GatheringService {
  constructor(
    @InjectRepository(GatheringRepository)
    private gatheringRepository: GatheringRepository
  ) {}
  // private users: Users[] = [];

  async getAllGathering(): Promise<Gathering[]> {
    return this.gatheringRepository.find();
  }
  async createGathering(
    createGatDto: CreateGatheringDto,
    user: Users
  ): Promise<Gathering> {
    const { thumbnail, title, type } = createGatDto;
    const gathering = new Gathering();
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    console.log(`gathering user :: ${JSON.stringify(user)}`);
    const saveGathering = await this.gatheringRepository.save({
      thumbnail,
      title,
      type,
      user
    });
    return saveGathering;
  }

  async getGatheringById(id: number): Promise<Gathering> {
    const found = await this.gatheringRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find User with id ${id}`);
    return found;
  }

  async deleteGathering(id: number): Promise<void> {
    const result = await this.gatheringRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
  async updateGathering(
    id: number,
    name: string,
    age: number
  ): Promise<Gathering> {
    const gathering = await this.getGatheringById(id);

    await this.gatheringRepository.save(gathering);
    return gathering;
  }
  async updateGatheringType(
    id: number,
    type: GatheringType
  ): Promise<Gathering> {
    const gathering = await this.getGatheringById(id);
    gathering.type = type;
    await this.gatheringRepository.save(gathering);
    return gathering;
  }
}
