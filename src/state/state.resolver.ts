import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { StateService } from './state.service';
import { StateType } from './state.type';
import { CreateStateInput } from './state-create.input';
import { State } from './state.schema';
import { DistrictType } from 'src/district/district.type';
import { DistrictService } from 'src/district/district.service';

@Resolver(() => StateType)
export class StateResolver {
  constructor(
    private stateService: StateService,
    private districtService: DistrictService
  ) {}

  @Mutation(() => StateType)
  async createState(@Args('input') input: CreateStateInput) {
    return this.stateService.create(input);
  }

  @Query(() => [StateType])
  async stateDetails(): Promise<State[]> {
    console.log('\n\n-- S.Resolver 11 -------- State Details ----');
    return this.stateService.findAll();
  }

  @ResolveField(() => [DistrictType], { nullable: true })
  async districtDetails(@Parent() state: StateType){
    console.log('-- S.Resolver 03 --|')
    return this.districtService.findByStateId(state.id);
  }

}
