import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StateService } from './state.service';
import { StateType } from './state.type';
import { CreateStateInput } from './state-create.input';

@Resolver(() => StateType)
export class StateResolver {
  constructor(private stateService: StateService) {}

  @Query(() => [StateType])
  async states() {
    return this.stateService.findAll();
  }

  @Mutation(() => StateType)
  async createState(@Args('input') input: CreateStateInput) {
    return this.stateService.create(input);
  }
}
