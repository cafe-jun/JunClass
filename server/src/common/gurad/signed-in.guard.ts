import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UseFilters,
  HttpException,
  UnauthorizedException,
  HttpStatus
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
// @UseFilters(new HttpExceptionFilter())
export class SignedInGurad implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    if (!authorization) {
      // request.isAuthenticated();
      throw new HttpException('it is custom error', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
