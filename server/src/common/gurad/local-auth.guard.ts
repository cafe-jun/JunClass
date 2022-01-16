import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//부모 AuthGurad에서 local 을 넣을지 어떻게 알까 ?
//CanActive 가 무엇일까 ?
@Injectable()
export class LocalAuthGurad extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const can = await super.canActivate(context);
    console.log(can);
    if (can) {
      const request = context.switchToHttp().getRequest();
      console.log('login for cookie');
      await super.logIn(request);
    }
    return true;
  }
}
