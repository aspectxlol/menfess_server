import { Test, TestingModule } from '@nestjs/testing';
import { SongfessController } from './songfess.controller';

describe('SongfessController', () => {
  let controller: SongfessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongfessController],
    }).compile();

    controller = module.get<SongfessController>(SongfessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
