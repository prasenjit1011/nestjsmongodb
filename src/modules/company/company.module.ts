import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './company.schema';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { EmployeeModule } from 'src/modules/employee/employee.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    EmployeeModule
  ],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService]
})
export class CompanyModule {}
