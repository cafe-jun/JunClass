import {
  CanActivate,
  ExecutionContext,
  BadRequestException,
  Injectable
} from '@nestjs/common';
import { JwtService } from '../../models/jwt/jwt.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    if (!request.headers.authorization)
      throw new BadRequestException('authorization Not Found.');
    const authorization: string = request.headers.authorization;
    const [bearer, token] = authorization.split(' ');
    if (!bearer || bearer !== 'Bearer')
      throw new BadRequestException('Bearer Not Found.');
    if (!token) throw new BadRequestException('token not found');
    try {
      await this.jwtService.verifyToken(token);
      return true;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
