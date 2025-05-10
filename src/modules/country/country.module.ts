import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './country.schema';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { StateModule } from 'src/modules/state/state.module';
import { DistrictModule } from 'src/modules/district/district.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    StateModule,
    DistrictModule
  ],
  providers: [CountryService, CountryResolver],
  //exports: [CountryService],
})
export class CountryModule {}
