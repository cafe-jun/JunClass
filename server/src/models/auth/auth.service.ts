import { Injectable, Body } from '@nestjs/common';
import { Users } from '../../models/users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({
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
  async signUp(@Body() user: Users): Promise<Users> {
    return user;
  }
}
