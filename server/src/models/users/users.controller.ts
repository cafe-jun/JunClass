import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common';
import { UserService } from './users.service';
import { Users } from './users.entities';
import { SignUpRequestDto } from './dto/signup.request.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('USERS')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: '모든 유저 정보 출력' })
  @Get('/')
  getAllUsers(): Promise<Users[]> {
    return this.userService.getAllUser();
  }
  @ApiOperation({ summary: '유저 디테일 정보' })
  @ApiResponse({ status: 201, description: 'APi Test1' })
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id): Promise<Users> {
    return this.userService.getUserById(id);
  }
  @Post('/')
  @ApiBody({ type: SignUpRequestDto })
  @ApiOperation({ summary: '유저 생성' })
  createUser(@Body() signInDto: SignUpRequestDto): Promise<Users> {
    return this.userService.createUser(signInDto);
  }
  @ApiOperation({ summary: '유저 삭제' })
  @Delete('/:id') // 숫자일경우  ParseIntPipe
  destroyUser(@Param('id') id: string): any {
    return this.userService.deleteUser(id);
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
