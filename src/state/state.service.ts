import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { State, StateDocument } from './state.schema';
import { Model } from 'mongoose';
import { CreateStateInput } from './state-create.input';

@Injectable()
export class StateService {
  constructor(@InjectModel(State.name) private stateModel: Model<StateDocument>) {}

  async create(input: CreateStateInput): Promise<State> {
    //const newState = new this.stateModel(input);
    // const newState = new this.stateModel({ 
    //   name: input.name, 
    //   country: input.countryId 
    // });

    const newState = new this.stateModel({
      name: input.name,
      ...(input.countryId && { country: input.countryId }), // assign only if provided
    });

    return newState.save();
  }

  async findAll(): Promise<State[]> {
    return this.stateModel.find().populate('country').exec();
  }

  async findByCountryId(countryId: string): Promise<State[]> {
    return this.stateModel.find({ country: countryId }).exec();
  } 

}
