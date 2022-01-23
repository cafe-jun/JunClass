import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
@Injectable()
export class AuthGurad implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    return true;
  }
}
