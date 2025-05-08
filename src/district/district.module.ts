import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { District, DistrictSchema } from './district.schema';
import { DistrictService } from './district.service';
import { DistrictResolver } from './district.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: District.name, schema: DistrictSchema }])],
  providers: [DistrictService, DistrictResolver],
  exports: [DistrictService]
})
export class DistrictModule {}
