import { Injectable } from '@nestjs/common';
import { Users, UsersGender } from './user.model';
import { v4 as uuid } from 'uuid';
// import { User } from '../entity/user.entity';
// import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class UserService {
  private users: Users[] = [];

  getAllUser(): Users[] {
    return this.users;
  }
  createUser(signInDto: SignInDto): Users {
    const { name, age } = signInDto;
    const user: Users = {
      id: uuid(),
      name,
      age,
      gender: UsersGender.MAN
    };
    this.users.push(user);
    return user;
  }
  getUserById(id: string): Users {
    return this.users.find((user) => user.id === id);
  }
  destroyUser(id: string) {
    return this.users.filter((user) => user.id !== id);
  }
  updateUser(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
