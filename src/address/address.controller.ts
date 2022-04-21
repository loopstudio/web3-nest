import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(':address')
  async getBalance(@Param('address') address: string): Promise<string> {
    return await this.addressService.getBalance(address);
  }
}
