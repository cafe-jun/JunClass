import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './models/user/user.module';
import config from './config/typeorm.config';
// import config from '../ormconfig';
import { AuthModule } from './auth/auth.module';
import { GatheringModule } from './models/gathering/gathering.module';
import { ChatService } from './models/chat/chat.service';
import { ChatGateway } from './models/chat.gateway';
import { ChatModule } from './models/chat/chat.module';
import path from 'path';
console.log(path.join(path.resolve(__dirname), '/src/**/*.entity.js'));
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    GatheringModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService, ChatService, ChatGateway]
})
export class AppModule {}
