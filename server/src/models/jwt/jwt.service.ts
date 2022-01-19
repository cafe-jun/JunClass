import jwt, {
  TokenExpiredError,
  JsonWebTokenError,
  NotBeforeError
} from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtService {
  async createToken(payload) {
    return await jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: '360s'
    });
  }
  async verifyToken(token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      return decode;
    } catch (error) {
      switch (error.constructor) {
        case TokenExpiredError:
          throw new TokenExpiredError('token is not valid.', new Date());
        case NotBeforeError:
          throw new NotBeforeError('Not Before Error', new Date());
        default:
          throw new JsonWebTokenError('Internal jwt Error');
      }
    }
  }
}
