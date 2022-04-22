import { Test, TestingModule } from '@nestjs/testing';
import { Web3Module } from '../web3/web3.module';
import { Web3Service } from '../web3/web3.service';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';

describe('Block Controller', () => {
  let blockController: BlockController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlockController],
      providers: [BlockService],
      imports: [Web3Module],
    }).compile();

    blockController = app.get<BlockController>(BlockController);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(blockController).toBeDefined();
    });
  });
});
