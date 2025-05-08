import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CountryType } from 'src/country/country.type';

@ObjectType()
export class StateType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => CountryType, { nullable: true })
  country?: CountryType;

}
