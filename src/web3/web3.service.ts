import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  private web3Instance: Web3;

  constructor(private configService: ConfigService) {
    this.web3Instance = new Web3(
      new Web3.providers.HttpProvider(
        this.configService.get<string>('WEB3_RPC_ENDPOINT'),
      ),
    );
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
}
