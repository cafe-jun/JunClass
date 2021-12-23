import { Injectable, NotFoundException } from '@nestjs/common';
import { GatheringRepository } from './gathering.repostiory';
import { Gathering } from './gathering.entity';
import { CreateGatheringDto } from './dto/create-gathering';
import { InjectRepository } from '@nestjs/typeorm';
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
    const { thumbnail, title, type } = createGatDto;
    const gathering = await this.gatheringRepository.create({
      thumbnail,
      title,
      type
    });
    await this.gatheringRepository.save(gathering);
    return gathering;
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
}
