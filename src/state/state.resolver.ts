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

  @Query(() => [StateType])
  async states() {
    return this.stateService.findAll();
  }

  @Query(() => [StateType])
  async stateList() {
    console.log('-: State List :-')
    return this.stateService.findDetails();
  }

  
  @Query(() => [StateType])
  async stateDetails(): Promise<State[]> {
    return this.stateService.findAll();
  }

  @ResolveField(() => [DistrictType], { nullable: true })
  async districts(@Parent() state: StateType){
    return this.districtService.findByStateId(state.id);
  }

  // @ResolveField(() => CountryType)
  // async country(@Parent() state: State) {
  //   return this.countryService.findById(state.country); // add `findById()` in country service
  // }


  @Mutation(() => StateType)
  async createState(@Args('input') input: CreateStateInput) {
    return this.stateService.create(input);
  }
}
