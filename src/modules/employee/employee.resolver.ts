import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { EmployeeType } from './employee.type';
import { CreateEmployeeInput } from './employee-create.input';
import { UpdateEmployeeInput } from './employee-update.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { UploadScalar } from 'src/upload.scalar';

import * as fs from 'fs';
import * as path from 'path';

@Resolver(() => EmployeeType)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}




  @Mutation(() => EmployeeType)
  async createEmployee(
    @Args('input') input: CreateEmployeeInput,
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true }) file?: FileUpload,
  ) {


    let filename: string | undefined;
  
    if (file) {
      const { createReadStream, filename: originalName } = file;
      filename = originalName;
      const uploadDir = './uploads';
  
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
  
      const filePath = path.join(uploadDir, filename);
      const stream = createReadStream();
      const writeStream = fs.createWriteStream(filePath);
  
      await new Promise<void>((resolve, reject) => {
        stream
          .pipe(writeStream)
          .on('finish', resolve)
          .on('error', reject);
      });
    }
  
    const inpData = {
      ...input,
      image: filename ?? null,
    };
  
    console.log('inpData :- ', inpData);
  
    return this.employeeService.create(inpData);
  }

  @Mutation(() => EmployeeType)
  async updateEmployee(@Args('input') input: UpdateEmployeeInput) {
    return this.employeeService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Args('id') id: string) {
    await this.employeeService.delete(id);
    return true;
  }

  @Query(() => [EmployeeType])
  async employeeDetails() {
    console.log('\n\n-- D.Resolver 21 -------- Employee Details ----');
    return this.employeeService.findAll();
  }
}
