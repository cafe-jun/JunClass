import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/users.repostiory';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/common/gurad/local.strategy';

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
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
