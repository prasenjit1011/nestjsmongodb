import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './employee.schema';
import { Model } from 'mongoose';
import { CreateEmployeeInput } from './employee-create.input';
import { UpdateEmployeeInput } from './employee-update.input';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  async create(input: CreateEmployeeInput): Promise<Employee> {
    const newEmployee = new this.employeeModel({
      name: input.name,
      image: input?.image,
      ...(input.companyId && { company: input.companyId }), // assign only if provided
    });

    return newEmployee.save();
  }

  async update(id: string, input: UpdateEmployeeInput): Promise<Employee> {
    const updated = await this.employeeModel.findByIdAndUpdate(
      id,
      { $set: input },
      { new: true },
    );
    if (!updated) {
      throw new NotFoundException(`Employee with ID "${id}" not found`);
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    const result = await this.employeeModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Employee with ID "${id}" not found`);
    }
  }


  
  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate({path:'company', populate:{path:'district', populate:{path:'state', populate:{path:'country'}}}});
    
  }

  async findByCompanyId(companyId: string): Promise<Employee[]> {
    return this.employeeModel.find({ company: companyId }).exec();
  } 

}
