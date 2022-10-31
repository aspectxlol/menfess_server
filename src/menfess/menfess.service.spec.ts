import { Test, TestingModule } from '@nestjs/testing';
import { MenfessService } from './menfess.service';

describe('MenfessService', () => {
  let service: MenfessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenfessService],
    }).compile();

    service = module.get<MenfessService>(MenfessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
