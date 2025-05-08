import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { State, StateDocument } from './state.schema';
import { Model } from 'mongoose';
import { CreateStateInput } from './state-create.input';

@Injectable()
export class StateService {
  constructor(@InjectModel(State.name) private stateModel: Model<StateDocument>) {}

  async create(input: CreateStateInput): Promise<State> {
    const newState = new this.stateModel(input);
    return newState.save();
  }

  async findAll(): Promise<State[]> {
    return this.stateModel.find().exec();
  }
}
