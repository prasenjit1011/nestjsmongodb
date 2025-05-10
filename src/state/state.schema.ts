import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class State {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Country', required: false }) // NOT required
  country?: Types.ObjectId;

}

export type StateDocument = State & Document;
export const StateSchema = SchemaFactory.createForClass(State);

// StateSchema.virtual('districts', {
//   ref: 'District',
//   localField: '_id',
//   foreignField: 'state',
// });

// StateSchema.set('toObject', { virtuals: true });
// StateSchema.set('toJSON', { virtuals: true });