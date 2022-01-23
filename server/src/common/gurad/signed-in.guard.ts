import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UseFilters,
  HttpException,
  UnauthorizedException,
  HttpStatus
} from '@nestjs/common';

@Injectable()
// @UseFilters(new HttpExceptionFilter())
export class SignedInGurad implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    if (!authorization) {
      throw new HttpException(
        { message: 'it is test error', code: 4000 },
        HttpStatus.BAD_REQUEST
      );
    }
    return true;
  }
}
