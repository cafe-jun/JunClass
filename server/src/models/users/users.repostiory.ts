import { Repository, EntityRepository } from 'typeorm';
import { Users } from './users.entities';
import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
import { AuthCredentialsDto } from '../auth/dto/auth-credential.dto';
@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({ email, password: hashedPassword });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23050') throw new ConflictException('Existing name');
      throw new InternalServerErrorException();
    }
  }
}
