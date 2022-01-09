import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
// import { ChatService } from './chat.service';

@Module({
  providers: [EventGateway]
})
export class EventModule {}
