import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/users.repostiory';
import { LocalStrategy } from 'src/common/gurad/local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalSerializer } from '../../common/gurad/local.serializer';
import { Users } from '../users/users.entity';

@Module({
  imports: [
    PassportModule.register({
      session: true
    }),
    // JwtModule.register({
    //   secret: 'Secret1234',
    //   signOptions: {
    //     expiresIn: 60 * 60
    //   }
    // }),
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalSerializer]
})
export class AuthModule {}
