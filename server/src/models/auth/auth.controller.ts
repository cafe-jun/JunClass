import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { Users } from '../users/users.model';
import { LocalAuthGurad } from 'src/common/gurad/local-auth.gurad';

@Controller()
export class AuthController {
  @UseGuards(LocalAuthGurad)
  @Post('signin')
  signIn(@Body() user: Users): Users | boolean {
    return user || false;
  }
}
