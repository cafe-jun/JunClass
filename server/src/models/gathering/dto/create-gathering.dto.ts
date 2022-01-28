import { Exclude, Expose } from 'class-transformer';
import { Gathering } from '../gathering.entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class CreateGatheringDto {
  @Expose()
  @IsString()
  title: string;
  @Expose()
  @IsString()
  thumbnail: string;
  @Expose()
  @IsString()
  type: string;

  constructor() {}

  static of(
    title: string,
    thumbnail: string,
    type: string
  ): CreateGatheringDto {
    const gathering = new CreateGatheringDto();
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    gathering.type = type;
    return gathering;
  }

  toEntity() {
    return Gathering.register(this.title, this.thumbnail, this.type);
  }
}
