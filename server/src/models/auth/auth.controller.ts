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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) signUpRequestDto: SignUpRequestDto
  ): Promise<void> {
    return this.authService.signUp(signUpRequestDto);
  }
}
