import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Users } from 'src/models/users/users.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Users => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
