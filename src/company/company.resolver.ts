import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyType } from './company.type';
import { CreateCompanyInput } from './company-create.input';

@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query(() => [CompanyType])
  async companies() {
    return this.companyService.findAll();
  }

  @Mutation(() => CompanyType)
  async createCompany(@Args('input') input: CreateCompanyInput) {
    return this.companyService.create(input);
  }
}
