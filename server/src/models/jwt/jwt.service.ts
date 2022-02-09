import jwt, {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError
} from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
  // async generateToken(payload) {
  //   return jwt.sign(payload, process.env.JWT_SECRET, {
  //     algorithm: 'HS256',
  //     expiresIn: '60'
  //   });
  // }
  async verifyToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
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
