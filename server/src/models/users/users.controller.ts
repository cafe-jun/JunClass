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
import { UserService } from './users.service';
import { Users } from './users.entity';
import { SignInRequestDto } from './dto/signin.request.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getAllUsers(): Promise<Users[]> {
    return this.userService.getAllUser();
  }
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id): Promise<Users> {
    return this.userService.getUserById(id);
  }
  @Post('/')
  createUser(@Body() signInDto: SignInRequestDto): Promise<Users> {
    return this.userService.createUser(signInDto);
  }
  @Delete('/:id') // 숫자일경우  ParseIntPipe
  destroyUser(@Param('id', ParseIntPipe) id): void {
    this.userService.deleteUser(id);
  }
  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id,
    @Body('email') email: string
  ): Promise<Users> {
    return this.userService.updateUser(id, email);
  }
}
