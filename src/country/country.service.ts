import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country, CountryDocument } from './country.schema';
import { Model } from 'mongoose';
import { CreateCountryInput } from './country-create.input';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) {}

  async create(input: CreateCountryInput): Promise<Country> {
    const newCountry = new this.countryModel(input);
    return newCountry.save();
  }

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }
}
