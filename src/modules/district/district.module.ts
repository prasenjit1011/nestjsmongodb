import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { District, DistrictSchema } from './district.schema';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';
import { CompanyModule } from 'src/modules/company/company.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: District.name, schema: DistrictSchema }]),
    CompanyModule
  ],
  providers: [DistrictService, DistrictResolver],
  exports: [DistrictService]
})
export class DistrictModule {}
