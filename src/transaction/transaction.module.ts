import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Web3Module } from 'src/web3/web3.module';

@Module({
  imports: [Web3Module],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class AppModule {}
