import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StateType } from 'src/modules/state/state.type';

@ObjectType()
export class CountryType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  // @Field(() => [StateType], { nullable: true })
  // states?: StateType[];
}
