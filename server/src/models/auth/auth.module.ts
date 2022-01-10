import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Users } from '../users/users.entities';
import { JwtStrategy } from '../../models/auth/jwt.strategy';
import { LocalStrategy } from 'src/common/gurad/local.strategy';
import { LocalSerializer } from '../../common/gurad/local.serializer';
import { UsersRepository } from '../users/users.repostiory';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60
      }
    })
  ],
  // controllers: [AuthController]
  providers: [AuthService, JwtService]
  // exports: [JwtStrategy, PassportModule]
  //providers: [AuthService, JwtStrategy /* LocalStrategy, LocalSerializer*/]
})
export class AuthModule {}
