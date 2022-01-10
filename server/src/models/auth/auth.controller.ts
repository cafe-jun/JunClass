import {
  Controller,
  Post,
  Body,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';
import { Users } from '../users/users.model';
import { LocalAuthGurad } from '../../common/gurad/local-auth.gurad';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @UseGuards(LocalAuthGurad)

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }
}
