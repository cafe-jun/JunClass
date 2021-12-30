import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common';
import { GatheringType } from '../../models/gathering/gathering-type.enum';

export class GatheringTypeValidation implements PipeTransform {
  readonly TypeOptions = [GatheringType.PREMIUM, GatheringType.GENERAL];
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isTypeValid(value)) {
      throw new BadRequestException(`${value} isn't the type options`);
    }
    return value;
  }

  private isTypeValid(type: any) {
    const index = this.TypeOptions.indexOf(type);
    return index !== -1;
  }
}
