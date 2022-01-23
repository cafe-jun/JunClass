import { CanActivate, ExecutionContext } from '@nestjs/common';

export class NotSignedInGurad implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return !request.isAuthenticated();
  }
}
