import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Product extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  details: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
