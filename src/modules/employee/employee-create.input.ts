import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  companyId?: string;

  @Field({ nullable: true })
  image?: string; // optional for DB saving

}
