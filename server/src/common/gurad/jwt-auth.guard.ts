import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp().getRequest();
    console.log(ctx.cookies);
    return super.canActivate(context);
  }
  handleRequest(err, user, info) {
    console.log(user);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
  // private fromHeaderBearer() {
  //   if (!request.headers.authorization)
  //     throw new BadRequestException('authorization Not Found.');
  //   const authorization: string = request.headers.authorization;
  //   const [bearer, token] = authorization.split(' ');
  //   if (!bearer || bearer !== 'Bearer')
  //     throw new BadRequestException('Bearer Not Found.');
  //   if (!token) throw new BadRequestException('token not found');
  // }
}
