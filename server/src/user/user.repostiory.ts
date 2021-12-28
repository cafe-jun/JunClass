import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { SignInDto } from './dto/signin.dto';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(signInDto: SignInDto): Promise<void> {
    const { name, password } = signInDto;
    const user = this.create({ name, password });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23050') throw new ConflictException('Existing name');
      throw new InternalServerErrorException();
    }
  }
}
