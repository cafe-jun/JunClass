import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(value);
    if (!metatype || !this.validateMetaType(metatype)) return value;
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    console.log(errors);
    if (errors.length > 0) {
      throw new BadRequestException('Validation Failed');
    }
    console.log(value);
    return value;
  }

  private validateMetaType(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
