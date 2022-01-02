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
import { ApiTags, ApiOperation, ApiCookieAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('USERS')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: '모든 유저 정보 출력' })
  @Get('/')
  getAllUsers(): Promise<Users[]> {
    return this.userService.getAllUser();
  }
  @Get('/:id')
  @ApiOperation({ summary: '유저 디테일 정보' })
  getUserById(@Param('id', ParseIntPipe) id): Promise<Users> {
    return this.userService.getUserById(id);
  }
  @Post('/')
  @ApiBody({ type: SignInRequestDto })
  @ApiOperation({ summary: '유저 생성' })
  createUser(@Body() signInDto: SignInRequestDto): Promise<Users> {
    return this.userService.createUser(signInDto);
  }
  @ApiOperation({ summary: '유저 삭제' })
  @Delete('/:id') // 숫자일경우  ParseIntPipe
  destroyUser(@Param('id', ParseIntPipe) id): void {
    this.userService.deleteUser(id);
  }
  @ApiOperation({ summary: '유저 정보 수정' })
  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id,
    @Body('email') email: string
  ): Promise<Users> {
    return this.userService.updateUser(id, email);
  }
}
