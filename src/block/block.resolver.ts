import { Resolver, Query, Args } from '@nestjs/graphql';

import { Web3Service } from 'src/web3/web3.service';
import { Block } from './block.schema';
import { BlockService } from './block.service';

@Resolver(() => Web3Service)
export class BlockResolver {
  constructor(private blockService: BlockService) {}

  @Query(() => Number)
  async blockNumber() {
    return this.blockService.getBlockNumber();
  }

  @Query(() => Block)
  async getBlock(@Args('id') id: number) {
    return await this.blockService.getBlock(id);
  }
}
