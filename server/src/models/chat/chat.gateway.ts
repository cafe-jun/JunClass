import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  OnGatewayInit,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ChatService } from './chat.service';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  private server: Server;

  private logger = new Logger(ChatGateway.name);

  constructor(private chatService: ChatService) {}

  afterInit() {
    this.logger.debug(`Socket Server Init Complete`);
  }

  handleConnection(client: Socket) {
    this.logger.debug(`connected sid ${client.id}`);
    client.join('room1');
    console.log(client.rooms);
    this.server
      .to(`${client.id}123`)
      .emit('msgToServer', `HelloWorld sid :${client.id} `);
  }
  handleDisconnect(client: Socket) {
    this.logger.debug(`${client.id} is disconnected...`);
  }
  @SubscribeMessage('chat')
  async handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    payload: { senderId: string; receiverId: string; content: string }
  ) {
    const { senderId, receiverId, content } = payload;
    await this.chatService.addMessage(senderId, receiverId, content);
    this.server.emit('msgToServer', payload);
  }
  @SubscribeMessage('message')
  async handleRoomList(@ConnectedSocket() client: Socket) {
    const messages = await this.chatService.getAllMessage();
    this.server.emit('message', messages);
  }
}
