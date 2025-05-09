import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './company.schema';
import { Model } from 'mongoose';
import { CreateCompanyInput } from './company-create.input';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

  async create(input: CreateCompanyInput): Promise<Company> {

    const newCompany = new this.companyModel({
      name: input.name,
      ...(input.districtId && { district: input.districtId }), // assign only if provided
    });

    return newCompany.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().populate('district');


    return this.companyModel.find();
    return this.companyModel
                .find()
                .populate({
                  path: 'district',
                  populate: { 
                    path: 'country' 
                  }
                });
  }

  async findByDistrictId(districtId: string): Promise<Company[]> {
    return this.companyModel.find({ district: districtId }).exec();
  } 

}
