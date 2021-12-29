import { Test, TestingModule } from '@nestjs/testing';
import { GatheringController } from './gathering.controller';

describe('GatheringController', () => {
  let controller: GatheringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatheringController]
    }).compile();

    controller = module.get<GatheringController>(GatheringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
