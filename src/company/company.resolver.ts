import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyType } from './company.type';
import { CreateCompanyInput } from './company-create.input';
import { EmployeeType } from 'src/employee/employee.type';
import { EmployeeService } from 'src/employee/employee.service';

@Resolver(() => CompanyType)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private employeeService: EmployeeService
  ) {}

  @Mutation(() => CompanyType)
  async createCompany(@Args('input') input: CreateCompanyInput) {
    return this.companyService.create(input);
  }

  @Query(() => [CompanyType])
  async companyDetails() {
    console.log('\n\n-- D.Resolver 21 -------- Company Details ----');
    return this.companyService.findAll();
  }

  @ResolveField(() => [EmployeeType], { nullable: true })
  async employeeDetails(@Parent() company: CompanyType){
    console.log('-- S.Resolver 03 --|')
    return this.employeeService.findByCompanyId(company.id);
  }


}
