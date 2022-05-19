import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
})
export class AppModule {}
