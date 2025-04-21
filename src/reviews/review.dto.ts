import { IsString } from 'class-validator';

export class ReviewDTO {
  @IsString()
  userId: string;

  @IsString()
  productId: string;

  @IsString()
  remarks: string;
}
