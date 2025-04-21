import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Acknowledgment } from 'src/acknowledgments/acknowledgment.schema';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: false })
export class Review {
  @Prop({ required: true })
  userId: string;;

  @Prop({ required: true })
  productId: string;;

  @Prop({ required: true })
  remarks: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Acknowledgment' }], require: false })
  acknowledgment: MongooseSchema.Types.ObjectId[];

}

export const ReviewSchema = SchemaFactory.createForClass(Review);
