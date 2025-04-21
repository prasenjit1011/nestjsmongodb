import { IsString, IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsArray()
  @ArrayNotEmpty()
  images: string[];  // Array of image URLs
}
