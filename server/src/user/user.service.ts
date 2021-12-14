import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from './dto/signin.dto';
import { UserRepository } from './user.repostiory';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}
  // private users: Users[] = [];

  // getAllUser(): Users[] {
  //   return this.users;
  // }
  async createUser(signInDto: SignInDto): Promise<User> {
    const { name, age } = signInDto;
    const user = await this.userRepository.create({ name, age });
    await this.userRepository.save(user);
    return user;
  }
  // createUser(signInDto: SignInDto): Users {
  //   const { name, age } = signInDto;
  //   const user: Users = {
  //     id: uuid(),
  //     name,
  //     age,
  //     gender: UsersGender.MAN
  //   };
  //   this.users.push(user);
  //   return user;
  // }

  async getUserById(id: string): Promise<User> {
    const found = await this.userRepository.findOne(id);
    if (!found) throw new NotFoundException(`Can't find User with id ${id}`);
    return found;
  }

  // getUserById(id: string): Users {
  //   return this.users.find((user) => user.id === id);
  // }
  // destroyUser(id: string) {
  //   return this.users.filter((user) => user.id !== id);
  // }
  // updateUser(id: string) {
  //   return this.users.find((user) => user.id === id);
  // }
}
