import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { AddressValidationPipe } from './address-validation.pipe';
import { AddressService } from './address.service';
import { CreateAddressDTO } from './address.dto';

@Controller('/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get(':address')
  async getBalance(
    @Param('address', AddressValidationPipe) address: string,
  ): Promise<string> {
    return await this.addressService.getBalance(address);
  }

  @Get('/')
  async getAddresses() {
    return await this.addressService.getAddresses();
  }

  @Post('/create')
  async createAddress(@Res() res, @Body() createAddressDTO: CreateAddressDTO) {
    const address = await this.addressService.createAddress(createAddressDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Address Succesfully Created',
      address,
    });
  }
}
