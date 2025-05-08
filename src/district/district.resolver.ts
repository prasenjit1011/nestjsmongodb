import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DistrictService } from './district.service';
import { DistrictType } from './district.type';
import { CreateDistrictInput } from './district-create.input';

@Resolver(() => DistrictType)
export class DistrictResolver {
  constructor(private districtService: DistrictService) {}

  @Query(() => [DistrictType])
  async districts() {
    return this.districtService.findAll();
  }

  // @ResolveField(() => StateType)
  // async state(@Parent() district: District) {
  //   return this.stateService.findById(district.state); // add `findById()` in state service
  // }


  @Mutation(() => DistrictType)
  async createDistrict(@Args('input') input: CreateDistrictInput) {
    return this.districtService.create(input);
  }
}
