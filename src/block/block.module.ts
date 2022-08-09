import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockResolver } from './block.resolver';
import { BlockService } from './block.service';

@Module({
  controllers: [BlockController],
  providers: [BlockService, BlockResolver],
  exports: [BlockService],
})
export class BlockModule {}
