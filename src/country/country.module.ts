import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './country.schema';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])],
  providers: [CountryService, CountryResolver],
  //exports: [CountryService],
})
export class CountryModule {}
