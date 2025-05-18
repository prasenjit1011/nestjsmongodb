import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStateInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  countryId?: string;

}
