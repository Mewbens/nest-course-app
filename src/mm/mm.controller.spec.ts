import { Test, TestingModule } from '@nestjs/testing';
import { MmController } from './mm.controller';

describe('MmController', () => {
  let controller: MmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MmController],
    }).compile();

    controller = module.get<MmController>(MmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
