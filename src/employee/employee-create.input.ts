import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  companyId?: string;

}
