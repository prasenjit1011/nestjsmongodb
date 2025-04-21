import { IsNotEmpty, IsString } from "class-validator";

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;
}
