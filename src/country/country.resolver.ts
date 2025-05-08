import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryType } from './country.type';
import { CreateCountryInput } from './country-create.input';

@Resolver(() => CountryType)
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query(() => [CountryType])
  async countries() {
    return this.countryService.findAll();
  }

  @Mutation(() => CountryType)
  async createCountry(@Args('input') input: CreateCountryInput) {
    return this.countryService.create(input);
  }
}
