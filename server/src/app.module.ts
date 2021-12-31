import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './models/user/user.module';
import config from './config/typeorm.config';

import { AuthModule } from './auth/auth.module';
import { GatheringModule } from './models/gathering/gathering.module';
import { ChatModule } from './models/chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    GatheringModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
