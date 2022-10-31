import { Test, TestingModule } from '@nestjs/testing';
import { SongfessService } from './songfess.service';

describe('SongfessService', () => {
  let service: SongfessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongfessService],
    }).compile();

    service = module.get<SongfessService>(SongfessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
