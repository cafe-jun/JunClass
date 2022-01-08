import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger
} from '@nestjs/common';
import { RedisIoAdapter } from '../../adapters/redis.adapter';
import { ChatGateway } from './chat.gateway';
import { RedisAdapter } from 'socket.io-redis';
import { Socket, Server } from 'socket.io';
import { sendAction } from '../../common/action/send';
import { ReceiveAction } from '../../common/action/receive';

@Injectable()
export class ChatService {
  private static readonly logger = new Logger(ChatService.name);

  // private redisClient: RedisClient;
  // private publisherClient: RedisClient;
  // private subscriberClient: RedisClient;
  // private discoveryInterval;

  // async onModuleInit() {
  //   ChatService.logger.debug('OnModuleInit Chat Service Load Success .....');
  //   this.redisClient = await this.newRedisClient();
  //   this.subscriberClient = await this.newRedisClient();
  //   this.publisherClient = await this.newRedisClient();
  // }
  // async onModuleDestroy() {
  //   this.discoveryInterval && clearTimeout(this.discoveryInterval);
  // }
  // private async newRedisClient() {
  //   return createClient({
  //     host: 'localhost',
  //     port: 6379
  //   });
  // }
  // public async sendMessage(sid: string) {
  //   console.log(sid);
  // }
  // public async subscribeChannel(channel: string) {
  //   this.subscriberClient.subscribe(channel);
  // }
  // public async publishAsync(channel: string, message: string) {
  //   this.publisherClient.publish(channel, message);
  // }
}

// 파라미를 Object 타임으로 를 사용시
