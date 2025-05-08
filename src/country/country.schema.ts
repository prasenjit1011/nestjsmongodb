import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Country {
  @Prop({ required: true })
  name: string;
}

export type CountryDocument = Country & Document;
export const CountrySchema = SchemaFactory.createForClass(Country);
