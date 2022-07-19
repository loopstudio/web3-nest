import { Document } from 'mongoose';

export interface Address extends Document {
  name: string;
  balance: number;
}
