import { AuthGuard } from '@nestjs/passport';
import {
  CanActivate,
  ExecutionContext,
  BadRequestException,
  HttpCode
} from '@nestjs/common';
import { Observable } from 'rxjs';
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization)
      throw new BadRequestException('authorization Not Found.');
    const authorization: string = request.headers.authorization;
    const token = authorization.slice(authorization.lastIndexOf('Bearer '));
    console.log(authorization.indexOf('Bearer', -1));
    return true;
  }
}
