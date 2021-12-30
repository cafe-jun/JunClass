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

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private static readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  public server: Server;

  afterInit() {
    ChatGateway.logger.debug(`Socket Server Init Complete`);
  }

  handleConnection(client: Socket) {
    ChatGateway.logger.debug(`${client.id} is connected!`);
  }
  handleDisconnect(client: Socket) {
    ChatGateway.logger.debug(`${client.id} is disconnected...`);
  }
  @SubscribeMessage('test')
  handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: string
  ): string {
    ChatGateway.logger.debug(data, socket.id);
    return 'hello';
  }
}
