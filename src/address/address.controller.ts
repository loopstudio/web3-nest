import { Controller, Get, Param } from '@nestjs/common';
import { AddressValidationPipe } from './address-validation.pipe';
import { AddressService } from './address.service';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(':address')
  async getBalance(
    @Param('address', AddressValidationPipe) address: string,
  ): Promise<string> {
    return await this.addressService.getBalance(address);
  }
}
