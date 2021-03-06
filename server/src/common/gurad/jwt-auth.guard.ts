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
    const cookies = context.switchToHttp().getRequest().cookies;
    console.log(`cookkie ${JSON.stringify(cookies)}`);
    return super.canActivate(context);
  }
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
  // Header
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
