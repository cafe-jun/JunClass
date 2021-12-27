import { IsNotEmpty } from 'class-validator';
import { GahteringType } from '../gathering-type.enum';
export class CreateGatheringDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  thumbnail: string;
  @IsNotEmpty()
  type: GahteringType;
}
