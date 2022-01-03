import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { GatheringType } from '../gathering-type.enum';
import { Users } from 'src/models/users/users.entity';
export class CreateGatheringDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  thumbnail: string;
  @IsNotEmpty()
  type: GatheringType;
  @IsNotEmpty()
  ownerUserId: string;
}
