import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtService } from '../jwt/jwt.service';
import { UsersRepository } from '../users/users.repostiory';
import { JwtAuthGuard } from '../../common/gurad/jwt-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60s'
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtAuthGuard, JwtStrategy],
  exports: [AuthService, JwtStrategy]
})
export class AuthModule {}
