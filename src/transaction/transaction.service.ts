import { Injectable } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Transaction } from './transaction.interface';
@Injectable()
export class TransactionService {
  constructor(
    private web3Service: Web3Service,
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
  ) {}

  async getTransaction(transactionHash: string) {
    // buscar bloque en base de datos
    // existe? lo devuelvo
    // no existe? lo busco en web3, si existe lo creo en la db y lo devuelvo
    console.log('Buscando Tx en la DB...');
    const transactionDB = await this.transactionModel.findOne({
      hash: transactionHash,
    });

    if (transactionDB) {
      console.log('Tx encontrada');
      return transactionDB;
    } else {
      console.log('No se encontro la Tx en la DB');
      console.log('Buscando en Web3...');
      const transaction = await this.web3Service.getTransaction(
        transactionHash,
      );

      if (transaction) {
        console.log('Creando Tx en la DB...');
        const newTransaction = new this.transactionModel(transaction);
        return newTransaction.save();
      }
    }
  }
}
