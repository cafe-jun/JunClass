import { Injectable, Logger } from '@nestjs/common';
// import { RedisIoAdapter } from '../../adapters/redis.adapter';
// import { ChatGateway } from './chat.gateway';
// import { Socket, Server } from 'socket.io';
// import { sendAction } from '../../common/action/send';
// import { ReceiveAction } from '../../common/action/receive';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './chat.entities';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: ChatRepository
  ) {}
  private static readonly logger = new Logger(ChatService.name);

  async addMessage(senderId: string, receiverId: string, content: string) {
    const chat = new Chat();
    chat.senderId = senderId;
    chat.receiverdId = receiverId;
    chat.content = content;
    return this.chatRepository.save(chat);
  }
  async getAllMessage(): Promise<Chat[]> {
    return this.chatRepository.find({
      select: ['content', 'senderId', 'receiverdId']
    });
  }
}

// 파라미터를 Object 타임으로 를 사용시
