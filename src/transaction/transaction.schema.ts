import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

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

@ObjectType()
export class Transaction extends Document {
  @Field()
  hash: String;

  @Field()
  blockHash: String;

  @Field()
  blockNumber: Number;

  @Field()
  chainId: String;

  @Field()
  from: String;

  @Field()
  gas: Number;

  @Field()
  gasPrice: String;

  @Field()
  input: String;

  @Field()
  nonce: Number;

  @Field()
  r: String;

  @Field()
  s: String;

  @Field()
  to: String;

  @Field()
  transactionIndex: Number;

  @Field()
  type: Number;

  @Field()
  v: String;

  @Field()
  value: String;
}
