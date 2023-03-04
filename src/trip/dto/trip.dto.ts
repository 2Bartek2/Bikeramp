import { IsString, Length } from 'class-validator';

export class TripDto {
  @IsString()
  @Length(2, 256)
  start: string;

  @IsString()
  @Length(2, 256)
  finish: string;
}
