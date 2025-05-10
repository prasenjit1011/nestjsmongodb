import { ObjectType, Field, ID } from '@nestjs/graphql';
import { DistrictType } from 'src/modules/district/district.type';

@ObjectType()
export class CompanyType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => DistrictType, { nullable: true })
  district?: DistrictType;

}
