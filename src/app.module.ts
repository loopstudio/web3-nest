import { Module } from '@nestjs/common';
import { Web3Module } from './web3/web3.module';
import { ConfigModule } from '@nestjs/config';
import { BlockController } from './block/block.controller';
import { AddressController } from './address/address.controller';
import { TransactionController } from './transaction/transaction.controller';

import { AddressModule } from './address/address.module';
import { TransactionModule } from './transaction/transaction.module';
import { BlockModule } from './block/block.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    Web3Module,
    BlockModule,
    TransactionModule,
    AddressModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [BlockController, AddressController, TransactionController],
  providers: [],
})
export class AppModule {}
