import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
  Put
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { SignInDto } from './dto/signin.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id): Promise<User> {
    return this.userService.getUserById(id);
  }
  @Post('/')
  createUser(@Body() signInDto: SignInDto): Promise<User> {
    return this.userService.createUser(signInDto);
  }
  @Delete('/:id') // 숫자일경우  ParseIntPipe
  destroyUser(@Param('id', ParseIntPipe) id): void {
    this.userService.deleteUser(id);
  }
  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id,
    @Body('age') age: number,
    @Body('name') name: string
  ): Promise<User> {
    return this.userService.updateUser(id, name, age);
  }
}
