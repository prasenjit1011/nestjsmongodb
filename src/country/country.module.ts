import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './country.schema';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { StateModule } from 'src/state/state.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    StateModule
  ],
  providers: [CountryService, CountryResolver],
  //exports: [CountryService],
})
export class CountryModule {}
