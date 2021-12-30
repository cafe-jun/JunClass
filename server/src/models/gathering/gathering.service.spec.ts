import { Test, TestingModule } from '@nestjs/testing';
import { GatheringService } from './gathering.service';

describe('GatheringService', () => {
  let service: GatheringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatheringService]
    }).compile();

    service = module.get<GatheringService>(GatheringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
