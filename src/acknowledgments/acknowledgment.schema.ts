import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Resolution } from 'src/resolutions/resolution.schema';

export type AcknowledgmentDocument = Acknowledgment & Document;

@Schema({ timestamps: false })
export class Acknowledgment {
  @Prop({ required: true })
  reviewId: string;

  @Prop({ required: true })
  response_msg: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Resolution' }], require: false })
  resolution: MongooseSchema.Types.ObjectId[];
}

export const AcknowledgmentSchema = SchemaFactory.createForClass(Acknowledgment);
