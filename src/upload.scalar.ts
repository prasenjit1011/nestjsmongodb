import { Scalar, CustomScalar } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-ts';

@Scalar('Upload', () => GraphQLUpload)
export class UploadScalar implements CustomScalar<any, any> {
  description = 'Upload custom scalar type';

  parseValue(value: any): any {
    return value;
  }

  serialize(value: any): any {
    return value;
  }

  parseLiteral(ast: any): any {
    return null;
  }
}
