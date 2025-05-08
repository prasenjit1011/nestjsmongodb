import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { District, DistrictDocument } from './district.schema';
import { Model } from 'mongoose';
import { CreateDistrictInput } from './district-create.input';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District.name) private districtModel: Model<DistrictDocument>) {}

  async create(input: CreateDistrictInput): Promise<District> {
    //const newDistrict = new this.districtModel(input);
    // const newDistrict = new this.districtModel({ 
    //   name: input.name, 
    //   state: input.stateId 
    // });

    const newDistrict = new this.districtModel({
      name: input.name,
      ...(input.stateId && { state: input.stateId }), // assign only if provided
    });

    return newDistrict.save();
  }

  async findAll(): Promise<District[]> {
    return this.districtModel.find().populate('state').exec();
  }

  async findByStateId(stateId: string): Promise<District[]> {
    return this.districtModel.find({ state: stateId }).exec();
  } 

}
