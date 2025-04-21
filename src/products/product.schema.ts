import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Review } from 'src/reviews/review.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [String], required: true })
  images: string[];
  
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Review' }], require: false })
  reviews: MongooseSchema.Types.ObjectId[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
