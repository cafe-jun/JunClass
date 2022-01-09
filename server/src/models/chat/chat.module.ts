import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [ChatService, ChatGateway]
})
export class ChatModule {}
