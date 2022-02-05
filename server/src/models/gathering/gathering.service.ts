import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { GatheringRepository } from './gathering.repostiory';
import { Gathering } from './gathering.entities';

import { InjectRepository } from '@nestjs/typeorm';
import { GatheringType } from './gathering-type.enum';

@Injectable()
export class GatheringService {
  constructor(
    @InjectRepository(GatheringRepository)
    private gatheringRepository: GatheringRepository
  ) {}
  private logger = new Logger('GatheringService');
  async getAllGathering(): Promise<Gathering[]> {
    return await this.gatheringRepository.find();
  }
  async createGathering(gathering: Gathering): Promise<void> {
    this.logger.log(`gathering user :: `);
    await this.gatheringRepository.createGathering(gathering);
  }

  async getGatheringById(id: number): Promise<Gathering> {
    const found = await this.gatheringRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find User with id ${id}`);
    return found;
  }

  async deleteGathering(id: string): Promise<void> {
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
