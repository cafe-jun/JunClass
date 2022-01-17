import { Injectable, Body, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
// import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repostiory';
import { SignUpRequestDto } from '../users/dto/signup.request.dto';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    // private jwtService: JwtService
    private jwtService: JwtService
  ) {}
  private logger = new Logger('AuthService');
  async signUp(signUpRequestDto: SignUpRequestDto): Promise<void> {
    return await this.usersRepository.createUser(signUpRequestDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({
      select: ['email', 'password', 'id'],
      where: { email }
    });
    if (!user) {
      return null;
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (user && passwordCheck) {
      const payload = { email };
      const accessToken = await this.jwtService.createToken(payload);
      return { accessToken };
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password']
    });
    if (!user) {
      return null;
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      // 비구조화 할당으로 password를 제외한 모든 유저 정보를 분리가 가능한다
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}
