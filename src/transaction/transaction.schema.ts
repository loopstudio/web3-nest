import { Schema } from 'mongoose';

export const TransactionSchema = new Schema({
  hash: String,
  blockHash: String,
  blockNumber: Number,
  chainId: String,
  from: String,
  gas: Number,
  gasPrice: String,
  input: String,
  nonce: Number,
  r: String,
  s: String,
  to: String,
  transactionIndex: Number,
  type: Number,
  v: String,
  value: String,
});
