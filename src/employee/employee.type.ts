import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CompanyType } from 'src/company/company.type';

@ObjectType()
export class EmployeeType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => CompanyType, { nullable: true })
  company?: CompanyType;

}
