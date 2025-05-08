import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StateType } from 'src/state/state.type';

@ObjectType()
export class DistrictType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => StateType, { nullable: true })
  state?: StateType;

}
