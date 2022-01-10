import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Users } from '../users/users.entities';
import { JwtStrategy } from 'src/common/gurad/jwt.strategy';
import { LocalStrategy } from 'src/common/gurad/local.strategy';
import { LocalSerializer } from '../../common/gurad/local.serializer';
import { UserRepository } from '../users/users.repostiory';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60
      }
    }),
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
  //providers: [AuthService, JwtStrategy /* LocalStrategy, LocalSerializer*/]
})
export class AuthModule {}
