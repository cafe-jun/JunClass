import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/models/users/users.repostiory';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Users } from 'src/models/users/users.entities';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET || 'JunSeok',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  }
  async validate(payload): Promise<Users> {
    const { email } = payload;
    const user: Users = await this.userRepository.findOne({ email });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
