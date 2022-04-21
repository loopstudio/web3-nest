import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';

@Injectable()
export class TransactionService {
  constructor(private web3Service: Web3Service) {}

  async getTransaction(transactionHash: string) {
    return await this.web3Service.getTransaction(transactionHash);
  }
}
