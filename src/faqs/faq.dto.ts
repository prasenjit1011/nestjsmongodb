import { IsString } from 'class-validator';

export class FaqDTO {
  @IsString()
  question: string;

  @IsString()
  answer: string;
}
