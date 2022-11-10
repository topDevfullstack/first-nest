import { Test, TestingModule } from '@nestjs/testing';
import { CatssController } from './catss.controller';
import { CatssService } from './catss.service';

describe('CatssController', () => {
  let controller: CatssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatssController],
      providers: [CatssService],
    }).compile();

    controller = module.get<CatssController>(CatssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
