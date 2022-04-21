import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from 'src/web3/web3.module';

@Module({
  imports: [Web3Module, ConfigModule.forRoot()],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class AppModule {}
