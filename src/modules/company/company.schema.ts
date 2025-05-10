import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'District', required: false }) // NOT required
  district?: Types.ObjectId;

}

export type CompanyDocument = Company & Document;
export const CompanySchema = SchemaFactory.createForClass(Company);
