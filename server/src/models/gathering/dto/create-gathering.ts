import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { GatheringType } from '../gathering-type.enum';
export class CreateGatheringDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  thumbnail: string;
  @IsNotEmpty()
  type: GatheringType;
}
