import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/models/users/users.repostiory';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Users } from 'src/models/users/users.entities';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET || 'JunSeok',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  }
  async validate(payload): Promise<Users> {
    const { email } = payload;
    const user: Users = await this.usersRepository.findOne({ email });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
