import { Schema } from 'mongoose';

export const AddressSchema = new Schema({
  address: String,
  balance: Number,
});
