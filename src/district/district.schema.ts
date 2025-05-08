import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class District {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'State', required: false }) // NOT required
  state?: Types.ObjectId;

}

export type DistrictDocument = District & Document;
export const DistrictSchema = SchemaFactory.createForClass(District);
