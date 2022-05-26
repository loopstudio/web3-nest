import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlockService } from './block.service';

@Controller('/block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async getBlockNumber(): Promise<number> {
    return await this.blockService.getBlockNumber();
  }

  @Get(':id')
  async getBlock(@Param('id', ParseIntPipe) id: number) {
    return await this.blockService.getBlock(id);
  }
}
