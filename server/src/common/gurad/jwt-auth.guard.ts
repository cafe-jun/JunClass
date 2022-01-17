import { AuthGuard } from '@nestjs/passport';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export class JwtAuthGuard implements CanActivate {
  canActcanActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true
  }
  // handleRequest(err, user, info) {
  //   console.log(err);
  //   console.log(`user :${user}`);
  //   if (err || !user) throw err || new UnauthorizedException();
  //   return user;
  // }
}
