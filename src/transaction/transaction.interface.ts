import { Document } from 'mongoose';

export interface Transaction extends Document {
  hash: string;
  blockHash: string;
  blockNumber: number;
  chainId: string;
  from: string;
  gas: number;
  gasPrice: string;
  input: string;
  nonce: number;
  r: string;
  s: string;
  to: string;
  transactionIndex: number;
  type: number;
  v: string;
  value: string;
}
