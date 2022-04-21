import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';
@Injectable()
export class BlockService {
  constructor(private web3Service: Web3Service) {}

  async getBlockNumber(): Promise<number> {
    return await this.web3Service.getBlockNumber();
  }

  async getBlock(id: number) {
    return await this.web3Service.getBlock(id);
  }
}
