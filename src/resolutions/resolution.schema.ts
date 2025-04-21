import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResolutionDocument = Resolution & Document;

@Schema({ timestamps: false })
export class Resolution {
  @Prop({ required: true })
  msg: string;

  @Prop({ required: true })
  acknowledgmentId: string;
}

export const ResolutionSchema = SchemaFactory.createForClass(Resolution);
