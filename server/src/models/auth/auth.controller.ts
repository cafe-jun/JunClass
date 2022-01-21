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
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인 API'
  })
  @ApiBody({ type: AuthCredentialsDto })
  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
  @ApiOperation({
    summary: '회원가입 API',
    description: '회원가입 API'
  })
  @ApiBody({ type: AuthCredentialsDto })
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) signUpRequestDto: SignUpRequestDto
  ): Promise<void> {
    return this.authService.signUp(signUpRequestDto);
  }
}
