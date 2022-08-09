import { Args, Resolver, Query } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.schema';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private transactionService: TransactionService) {}

  @Query(() => Transaction)
  async getTransaction(@Args('transactionHash') transactionHash: string) {
    return await this.transactionService.getTransaction(transactionHash);
  }
}
