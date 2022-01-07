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

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private static readonly logger = new Logger(ChatGateway.name);
  public connectedSockets: { [key: string]: any[] } = {};

  constructor(private chatService: ChatService) {}

  // @SubscribeMessage('login')
  // async handleLogin() {}

  afterInit() {
    ChatGateway.logger.debug(`Socket Server Init Complete`);
  }

  handleConnection(client: Socket) {
    try {
      if (!this.connectedSockets['test']) this.connectedSockets['test'] = [];
      this.connectedSockets['test'].push(client.id);
      ChatGateway.logger.debug(this.connectedSockets);
      this.chatService.subscribeChannel('channel:ssu-repl');
      this.chatService.publishAsync(
        'channel:ssu-repl',
        `${client.id} connected socket join`
      );
    } catch (error) {
      console.log(error);
    }
  }
  handleDisconnect(client: Socket) {
    ChatGateway.logger.debug(`${client.id} is disconnected...`);
  }

  @SubscribeMessage('pub')
  async handlePubMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: string
  ): Promise<string> {
    // await pubClient.publish('test', 'test');
    return 'hello';
  }

  @SubscribeMessage('sub')
  async handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: string
  ): Promise<string> {
    ChatGateway.logger.debug(data, socket.id);

    return 'hello';
  }
}
