import {
  Controller,
  Post,
  Body,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';

import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';
import { SignUpRequestDto } from '../users/dto/signup.request.dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인 API'
  })
  @ApiBody({ type: AuthCredentialsDto })
  @ApiResponse({ status: 2002, description: '로그인 성공' })
  @ApiResponse({ status: 4001, description: '존재하지 않는 ID 입니다.' })
  @ApiResponse({ status: 4002, description: '패스워드가 일치하지 않습니다.' })
  @Post('signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
  @ApiOperation({
    summary: '회원가입 API',
    description: '회원가입 API'
  })
  @ApiBody({ type: AuthCredentialsDto })
  @Post('/signup')
  signUp(@Body() signUpRequestDto: SignUpRequestDto): Promise<void> {
    return this.authService.signUp(signUpRequestDto);
  }
}
