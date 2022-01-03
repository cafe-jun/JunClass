import { Injectable, NotFoundException } from '@nestjs/common';
import { GatheringRepository } from './gathering.repostiory';
import { Gathering } from './gathering.entity';
import { CreateGatheringDto } from './dto/create-gathering';
import { InjectRepository } from '@nestjs/typeorm';
import { GatheringType } from './gathering-type.enum';
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
  async createGathering(createGatDto: CreateGatheringDto): Promise<Gathering> {
    const { thumbnail, title, type, ownerUserId } = createGatDto;
    console.log(ownerUserId);
    const gathering = new Gathering();
    gathering.OwnerUserId = ownerUserId;
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    console.log(gathering);
    const saveGathering = await this.gatheringRepository.save({
      thumbnail,
      title,
      type,
      ownerUserId
    });
    // await this.gatheringRepository.save(gathering);
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
