import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './employee.schema';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])],
  providers: [EmployeeService, EmployeeResolver],
  exports: [EmployeeService]
})
export class EmployeeModule {}
