import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    console.log(info);
    console.log(err);
    console.log(`user :${user}`);
    if (err || !user) throw err || new UnauthorizedException();
    return user;
  }
}
