import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Review } from 'src/reviews/review.schema';
import { Order } from 'src/order/order.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Order' }], require: false })
  orders: MongooseSchema.Types.ObjectId[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Review' }], require: false })
  reviews: MongooseSchema.Types.ObjectId[];

}

export const UserSchema = SchemaFactory.createForClass(User);
