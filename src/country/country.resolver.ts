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
    private stateService: StateService,
  ) {}


  @Mutation(() => CountryType)
  async createCountry(@Args('input') input: CreateCountryInput) {
    return this.countryService.create(input);
  }

  @Query(() => [CountryType])
  async countryDetails(): Promise<Country[]> {
    console.log('\n\n-- C.Resolver 01 -------- Country Details ----');
    return this.countryService.findAll();
  }

  @ResolveField(() => [StateType], { nullable: true })
  async stateDetails(@Parent() country: CountryType){
    console.log('-- C.Resolver 02 --');
    return this.stateService.findByCountryId(country.id);
  }

}
