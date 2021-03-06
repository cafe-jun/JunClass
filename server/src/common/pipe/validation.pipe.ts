import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  UseFilters,
  HttpException
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
@UseFilters(HttpExceptionFilter)
@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.validateMetaType(metatype)) return value;
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return value;
  }

  private validateMetaType(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
