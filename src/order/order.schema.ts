import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/users.schema';
export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }],  required: true })
  userId: MongooseSchema.Types.ObjectId;


  // @Prop({ type: [{ productId: String, quantity: Number }], required: true })
  // products: { productId: string; quantity: number }[];

  @Prop({ type: [{ productId: { type: MongooseSchema.Types.ObjectId, ref: 'Product' }, quantity: Number }], required: true })
  products: { productId: MongooseSchema.Types.ObjectId; quantity: number }[];


  // @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Order' }], require: false })
  // orders: MongooseSchema.Types.ObjectId[];


  @Prop({ required: true })
  totalAmount: number;

  @Prop({ default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
