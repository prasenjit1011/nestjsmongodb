
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  price: number;
}
