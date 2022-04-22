import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Web3Service } from './web3.service';

@Module({
  providers: [Web3Service, ConfigService],
  exports: [Web3Service],
})
export class Web3Module {}
