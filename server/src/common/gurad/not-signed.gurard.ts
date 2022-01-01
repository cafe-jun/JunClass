import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Obserable } from 'rxjs';

export class NotSignedInGurad implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Obserable {
    const request = context.switchToHttp().getRequest();
    return !request.isAuthenticated();
  }
}
