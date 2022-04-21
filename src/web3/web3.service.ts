import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  private web3Instance: Web3;

  constructor(@Inject('rpcEndpoint') rpcEndpoint: string) {
    console.log('cALLING CONSTURCTOR WITH', rpcEndpoint);
    this.web3Instance = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));
  }

  async getBlockNumber(): Promise<number> {
    return await this.web3Instance.eth.getBlockNumber();
  }

  async getBlock(id: number) {
    return await this.web3Instance.eth.getBlock(id);
  }

  async getBalance(address: string): Promise<string> {
    return await this.web3Instance.eth.getBalance(address);
  }

  async getTransaction(transactionHash: string) {
    return await this.web3Instance.eth.getTransaction(transactionHash);
  }

  initWeb3Instance(rpcEndpoint: string) {}
}
