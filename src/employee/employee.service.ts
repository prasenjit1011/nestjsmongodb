import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './employee.schema';
import { Model } from 'mongoose';
import { CreateEmployeeInput } from './employee-create.input';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  async create(input: CreateEmployeeInput): Promise<Employee> {

    const newEmployee = new this.employeeModel({
      name: input.name,
      ...(input.companyId && { company: input.companyId }), // assign only if provided
    });

    return newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate({path:'company', populate:{path:'district', populate:{path:'state', populate:{path:'country'}}}});
    
  }

  async findByCompanyId(companyId: string): Promise<Employee[]> {
    return this.employeeModel.find({ company: companyId }).exec();
  } 

}
