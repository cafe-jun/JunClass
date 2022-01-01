import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './models/users/users.module';
import config from './config/typeorm.config';
import { GatheringModule } from './models/gathering/gathering.module';
import { ChatModule } from './models/chat/chat.module';
import { AppConfigModule } from './config/app/config.module';
import { AuthModule } from './models/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AppConfigModule,
    UserModule,
    GatheringModule,
    ChatModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
