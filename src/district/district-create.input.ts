import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDistrictInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  stateId?: string;

}
