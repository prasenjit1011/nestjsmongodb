import { IsArray, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsArray()
  @IsOptional()
  orders: string[];
}
