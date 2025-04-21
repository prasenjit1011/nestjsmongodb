import { IsString } from 'class-validator';

export class ResolutionDTO {
  @IsString()
  msg: string;

  @IsString()
  acknowledgmentId: string;
}
