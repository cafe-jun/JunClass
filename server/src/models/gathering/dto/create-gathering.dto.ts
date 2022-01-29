import { Exclude, Expose } from 'class-transformer';
import { Gathering } from '../gathering.entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString, IsObject } from 'class-validator';
import { Users } from 'src/models/users/users.entities';

export class CreateGatheringDto {
  @Expose()
  @IsString()
  title: string;
  @Expose()
  @IsString()
  thumbnail: string;
  @Expose()
  @IsString({ message: 'type is must be value', each: true })
  type: string;
  @Expose()
  @IsObject({ message: 'User Object must be value' })
  user: Users;

  constructor() {}

  static of(
    title: string,
    thumbnail: string,
    type: string,
    user: Users
  ): CreateGatheringDto {
    const gathering = new CreateGatheringDto();
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    gathering.type = type;
    gathering.user = user;
    return gathering;
  }

  toEntity() {
    return Gathering.register(this.title, this.thumbnail, this.type, this.user);
  }
}
