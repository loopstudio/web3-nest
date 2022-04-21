import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from 'src/web3/web3.module';

@Module({
  imports: [Web3Module, ConfigModule.forRoot()],
  controllers: [BlockController],
  providers: [BlockService],
})
export class AppModule {}
