import { Module } from '@nestjs/common';
import { Web3Module } from './web3/web3.module';
import { ConfigModule } from '@nestjs/config';
import { BlockController } from './block/block.controller';
import { BlockService } from './block/block.service';
import { AddressService } from './address/address.service';
import { AddressController } from './address/address.controller';
import { TransactionService } from './transaction/transaction.service';
import { TransactionController } from './transaction/transaction.controller';

@Module({
  imports: [Web3Module, ConfigModule.forRoot()],
  controllers: [BlockController, AddressController, TransactionController],
  providers: [BlockService, AddressService, TransactionService],
})
export class AppModule {}
