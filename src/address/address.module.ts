import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from 'src/web3/web3.module';

@Module({
  imports: [Web3Module, ConfigModule.forRoot()],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AppModule {}
