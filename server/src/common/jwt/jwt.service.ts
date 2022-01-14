import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { string } from 'joi';

@Injectable()
export class JwtServiceCustom {
  constructor(private jwtService: JwtService) {}

  async sign(payload: string) {
    this.jwtService.sign(string);
  }
}
