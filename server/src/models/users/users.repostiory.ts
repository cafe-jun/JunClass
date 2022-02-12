import { Repository, EntityRepository } from 'typeorm';
import { Users } from './users.entities';
import bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
import { AuthCredentialsDto } from '../auth/dto/auth-credential.dto';
import { SignUpRequestDto } from './dto/signup.request.dto';
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  async createUser(signUpRequestDto: SignUpRequestDto): Promise<Users> {
    const { email, password } = signUpRequestDto;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = this.create({ email, password: hashedPassword });
    try {
      return await this.save(user);
    } catch (error) {
      if (error.code === '23050') throw new ConflictException('Existing name');
      throw new InternalServerErrorException();
    }
  }
}
