import { Repository, EntityRepository } from 'typeorm';
import { Users } from './users.entities';
import { SignInRequestDto } from './dto/signin.request.dto';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async createUser(signInDto: SignInRequestDto): Promise<void> {
    const { email, age, password } = signInDto;
    const user = this.create({ email, age, password });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23050') throw new ConflictException('Existing name');
      throw new InternalServerErrorException();
    }
  }
}
