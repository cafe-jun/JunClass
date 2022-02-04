import { Test, TestingModule } from '@nestjs/testing';
import { GatheringService } from './gathering.service';
import { getRepository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Gathering } from './gathering.entities';
import { GatheringRepository } from './gathering.repostiory';

class MockGatheringRepository {
  #data = [{ id: '' }];
  findOne({ where: { title } }) {
    const data = this.#data.find((v) => v.id === title);
    if (data) {
      return data;
    }
    return null;
  }
}

describe('GatheringService', () => {
  let service: GatheringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GatheringService,
        {
          provide: getRepositoryToken(GatheringRepository),
          useClass: MockGatheringRepository
        }
      ]
    }).compile();

    service = module.get<GatheringService>(GatheringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
