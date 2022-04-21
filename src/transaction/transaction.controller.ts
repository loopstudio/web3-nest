import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get(':transactionHash')
  async getBalance(@Param('transactionHash') transactionHash: string) {
    return await this.transactionService.getTransaction(transactionHash);
  }
}
