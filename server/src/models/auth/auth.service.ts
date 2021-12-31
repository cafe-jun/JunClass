import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repostiory';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signIn(): Promise<string> {}
}
