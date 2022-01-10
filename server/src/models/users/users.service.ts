import {
  Injectable,
  NotFoundException,
  Logger,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInRequestDto } from './dto/signin.request.dto';
import { UsersRepository } from './users.repostiory';
import { Users } from './users.entities';
import bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository) private userRepository: UsersRepository
  ) {}
  private logger = new Logger('UserService');

  async getAllUser(): Promise<Users[]> {
    return this.userRepository.find();
  }
  async createUser(signInDto: SignInRequestDto): Promise<Users> {
    const { email, age, password } = signInDto;
    const hashpassword = await bcrypt.hash(password, 12);
    const user = await this.userRepository.save({
      id: uuid(),
      email,
      age,
      password: hashpassword
    });
    // await this.userRepository.save(user);
    return user;
  }

  async getUserById(id: number): Promise<Users> {
    const found = await this.userRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find User with id ${id}`);
    return found;
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id).catch((err) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: err.message
        },
        HttpStatus.BAD_REQUEST
      );
    });
    this.logger.debug(JSON.stringify(result));
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
  async updateUser(id: number, email: string): Promise<Users> {
    const user = await this.getUserById(id);
    user.email = email;
    await this.userRepository.save(user);
    return user;
  }
}
