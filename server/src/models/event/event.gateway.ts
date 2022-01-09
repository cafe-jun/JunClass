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

@WebSocketGateway({ namespace: 'event' })
export class EventGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  private static readonly logger = new Logger(EventGateway.name);
  // public connectedSockets: { [key: string]: any[] } = {};

  // constructor(private chatService: ChatService) {}

  // // @SubscribeMessage('login')
  // async handleLogin() {}

  afterInit() {
    EventGateway.logger.debug(`Socket Server Init Complete`);
  }

  handleConnection(client: Socket) {
    // try {
    //   if (!this.connectedSockets['test']) this.connectedSockets['test'] = [];
    //   this.connectedSockets['test'].push(client.id);
    //   EventGateway.logger.debug(this.connectedSockets);
    //   // this.chatService.subscribeChannel('channel:ssu-repl');
    //   // this.chatService.publishAsync(
    //   //   'channel:ssu-repl',
    //   //   `${client.id} connected socket join`
    //   // );
    // } catch (error) {
    //   console.log(error);
    // }
  }
  handleDisconnect(client: Socket) {
    EventGateway.logger.debug(`${client.id} is disconnected...`);
  }
}
