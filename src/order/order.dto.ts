import { IsString, IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  userId: string;

  @IsArray()
  @ArrayNotEmpty()
  products: { productId: string; quantity: number; price: number }[];

  @IsNumber()
  totalAmount: number;

  @IsString()
  status: string;
}
