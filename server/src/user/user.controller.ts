import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';
import { SignInDto } from './dto/signin.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get('/')
  // getAllUsers(): Users[] {
  //   return this.userService.getAllUser();
  // }
  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }
  @Post('/')
  createUser(@Body() signInDto: SignInDto): Promise<User> {
    return this.userService.createUser(signInDto);
  }
  // @Delete('/:id')
  // destroyUser(@Param('id') id: string): void {
  //   this.userService.destroyUser(id);
  // }
  // @Patch('/:id/gender')
  // updateUserGenger(@Param('id') id: string): Users {
  //   return this.userService.updateUser(id);
  // }
}
