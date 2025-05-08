import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryType } from './country.type';
import { CreateCountryInput } from './country-create.input';
import { StateType } from 'src/state/state.type';
import { Country } from './country.schema';
import { StateService } from 'src/state/state.service';

@Resolver(() => CountryType)
export class CountryResolver {
  constructor(
    private countryService: CountryService,
    private stateService: StateService
  ) {}

  @Mutation(() => CountryType)
  async createCountry(@Args('input') input: CreateCountryInput) {
    return this.countryService.create(input);
  }

  // @Query(() => [CountryType])
  // async countries() {
  //   return this.countryService.findAll();
  // }

  @Query(() => [CountryType])
  async countries(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @ResolveField(() => [StateType], { nullable: true })
  async states(@Parent() country: CountryType){
    return this.stateService.findByCountryId(country.id);
  }

////////////////////////////


  // @Query(() => [StateType])
  // async stateDetails(): Promise<State[]> {
  //   return this.stateService.findAll();
  // }

  // @ResolveField(() => [DistrictType], { nullable: true })
  // async districts(@Parent() state: StateType){
  //   return this.districtService.findByCountryId(state.id);
  // }

//////////////


}
