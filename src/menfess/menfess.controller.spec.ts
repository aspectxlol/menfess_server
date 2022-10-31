import { Test, TestingModule } from '@nestjs/testing';
import { MenfessController } from './menfess.controller';

describe('MenfessController', () => {
  let controller: MenfessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenfessController],
    }).compile();

    controller = module.get<MenfessController>(MenfessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
