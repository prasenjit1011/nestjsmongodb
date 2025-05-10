import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Employee {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Company', required: false }) // NOT required
  company?: Types.ObjectId;

}

export type EmployeeDocument = Employee & Document;
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
