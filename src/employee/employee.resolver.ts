import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './employee.type';
import { CreateEmployeeInput } from './employee-create.input';

@Resolver(() => EmployeeType)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Mutation(() => EmployeeType)
  async createEmployee(@Args('input') input: CreateEmployeeInput) {
    return this.employeeService.create(input);
  }

  @Query(() => [EmployeeType])
  async employeeDetails() {
    console.log('\n\n-- D.Resolver 21 -------- Employee Details ----');
    return this.employeeService.findAll();
  }
}
