import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Module({
  providers: [
    Web3Service,
    {
      provide: 'rpcEndpoint',
      useValue: 'https://rinkeby.infura.io/v3/27caec2bde054dafb62c85d068a9a9d2',
    },
  ],
  exports: [Web3Service],
})
export class Web3Module {}
