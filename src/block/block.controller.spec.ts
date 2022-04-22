import { Test, TestingModule } from '@nestjs/testing';
import { Web3Module } from '../web3/web3.module';
import { Web3Service } from '../web3/web3.service';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';

describe('Block Controller', () => {
  let blockController: BlockController;
  let web3Service: Web3Service;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlockController],
      providers: [BlockService],
      imports: [Web3Module],
    }).compile();

    blockController = app.get<BlockController>(BlockController);
    web3Service = app.get<Web3Service>(Web3Service);
  });

  describe('root', () => {
    it('should be defined"', () => {
      expect(blockController).toBeDefined();
    });
  });
});
