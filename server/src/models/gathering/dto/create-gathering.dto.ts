import { IsNotEmpty, isNotEmpty } from 'class-validator';
import { GatheringType } from '../gathering-type.enum';
import { Exclude, Expose } from 'class-transformer';
import { Gathering } from '../gathering.entities';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGatheringDto {
  @Exclude() private readonly _id: number;
  @Exclude() private readonly _title: string;
  @Exclude() private readonly _thumbnail: string;
  @Exclude() private readonly _type: string;

  constructor(gathering: Gathering) {
    this._id = gathering.id;
    this._title = gathering.title;
    this._thumbnail = gathering.thumbnail;
    this._type = gathering.type;
  }

  get id(): number {
    return this._id;
  }
  @Expose()
  @ApiProperty()
  get title(): string {
    return this._title;
  }
  @Expose()
  @ApiProperty()
  get thumbnail(): string {
    return this._thumbnail;
  }
  @Expose()
  @ApiProperty()
  get type(): string {
    console.log('test');
    return this._type;
  }
}
