import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CountryType } from 'src/modules/country/country.type';
import { DistrictType } from 'src/modules/district/district.type';

@ObjectType()
export class StateType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => CountryType, { nullable: true })
  country?: CountryType;

  @Field(() => [DistrictType], { nullable: true })
  district?: DistrictType[];

}
