import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Address } from './address.interface';
import { CreateAddressDTO } from './address.dto';

@Injectable()
export class AddressService {
  constructor(
    private web3Service: Web3Service,
    @InjectModel('Address') private addressModel: Model<Address>,
  ) {}

  async getBalance(address: string): Promise<string> {
    return await this.web3Service.getBalance(address);
  }
}
