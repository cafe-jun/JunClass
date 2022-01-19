import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
import { JwtService } from '../jwt/jwt.service';
import { UsersRepository } from '../users/users.repostiory';
import { JwtAuthGuard } from '../../common/gurad/jwt-auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtAuthGuard],
  exports: [AuthService]
})
export class AuthModule {}
