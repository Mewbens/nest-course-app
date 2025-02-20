import { Test, TestingModule } from '@nestjs/testing';
import { MmService } from './mm.service';

describe('MmService', () => {
  let service: MmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MmService],
    }).compile();

    service = module.get<MmService>(MmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
