import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './company.schema';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';


@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService]
})
export class CompanyModule {}
