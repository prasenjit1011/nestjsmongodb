import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './employee.type';
import { CreateEmployeeInput } from './employee-create.input';
import { UpdateEmployeeInput } from './employee-update.input';

@Resolver(() => EmployeeType)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Mutation(() => EmployeeType)
  async createEmployee(@Args('input') input: CreateEmployeeInput) {
    return this.employeeService.create(input);
  }

  @Mutation(() => EmployeeType)
  async updateEmployee(@Args('input') input: UpdateEmployeeInput) {
    return this.employeeService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Args('id') id: string) {
    await this.employeeService.delete(id);
    return true;
  }

  @Query(() => [EmployeeType])
  async employeeDetails() {
    console.log('\n\n-- D.Resolver 21 -------- Employee Details ----');
    return this.employeeService.findAll();
  }
}
