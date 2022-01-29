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
  @Expose()
  @IsString()
  userId: string;

  constructor() {}

  static of(
    title: string,
    thumbnail: string,
    type: string,
    userId: string
  ): CreateGatheringDto {
    const gathering = new CreateGatheringDto();
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    gathering.type = type;
    gathering.userId = userId;
    return gathering;
  }

  toEntity() {
    return Gathering.register(
      this.title,
      this.thumbnail,
      this.type,
      this.userId
    );
  }
}
