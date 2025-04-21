import { IsString } from 'class-validator';

export class AcknowledgmentDTO {
  @IsString()
  reviewId: string;

  @IsString()
  response_msg: string;
}
