import { AuthGuard } from '@nestjs/passport';
import {
  CanActivate,
  ExecutionContext,
  BadRequestException,
  HttpCode,
  Injectable,
  Inject
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '../../models/jwt/jwt.service';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization)
      throw new BadRequestException('authorization Not Found.');
    const authorization: string = request.headers.authorization;
    const [bearer, token] = authorization.split(' ');
    if (!bearer || bearer !== 'Bearer')
      throw new BadRequestException('Bearer Not Found.');
    if (!token) throw new BadRequestException('token not found');
    try {
    } catch (error) {}
    return true;
  }
}
