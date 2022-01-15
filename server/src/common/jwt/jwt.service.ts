import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
@Injectable()
export class JwtService {
  async verify(token: string) {
    jwt.verify(token, 'sdfsd');
  }

  async sign(payload: string) {
    try {
      await jwt.sign(payload, 'test');
    } catch (error) {
      console.log(error);
    }
  }
}
