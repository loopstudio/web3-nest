import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Block extends Document {
  @Field(() => [String])
  transactions: String[];

  @Field()
  size: number;

  @Field()
  difficulty: number;

  @Field()
  totalDifficulty: number;

  @Field()
  number: number;

  @Field()
  hash: string;
}
