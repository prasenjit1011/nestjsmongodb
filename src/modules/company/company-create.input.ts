import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  districtId?: string;

}
