import jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtService {
  async createToken(payload) {
    return await jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: '60s'
    });
  }
  async verifyToken(token) {
    await jwt.verify(token, process.env.JWT_SECRET);
  }
}
