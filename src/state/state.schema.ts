import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class State {
  @Prop({ required: true })
  name: string;
}

export type StateDocument = State & Document;
export const StateSchema = SchemaFactory.createForClass(State);
