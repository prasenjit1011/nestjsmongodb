import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CompanyType } from 'src/modules/company/company.type';
import { StateType } from 'src/modules/state/state.type';

@ObjectType()
export class DistrictType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => StateType, { nullable: true })
  state?: StateType;

  @Field(() => [CompanyType], { nullable: true })
  company?: CompanyType[];
}
