import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { DistrictType } from './district.type';
import { CreateDistrictInput } from './district-create.input';
import { CompanyType } from 'src/company/company.type';
import { CompanyService } from 'src/company/company.service';

@Resolver(() => DistrictType)
export class DistrictResolver {
  constructor(
    private districtService: DistrictService,
    private companyService: CompanyService
  ) {}

  @Mutation(() => DistrictType)
  async createDistrict(@Args('input') input: CreateDistrictInput) {
    return this.districtService.create(input);
  }

  @Query(() => [DistrictType])
  async districtDetails() {
    console.log('\n\n-- D.Resolver 21 -------- District Details ----');
    return this.districtService.findAll();
  }

  @ResolveField(() => [CompanyType], { nullable: true })
  async companyDetails(@Parent() district: DistrictType){
    console.log('-- D.Resolver 04 --');
    return this.companyService.findByDistrictId(district.id);
  }





}
