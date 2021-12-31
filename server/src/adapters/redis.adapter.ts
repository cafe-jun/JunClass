import { IoAdapter } from '@nestjs/platform-socket.io';
import { RedisClient } from 'redis';
import { ServerOptions } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
import { promisify } from 'util';

// export const globalSubscriber = new RedisClient({
//   host: 'localhost',
//   port: 6379
// });
// const coreRedisClient = globalSubscriber.duplicate();

// const publishAsync = promisify(coreRedisClient.publish).bind(coreRedisClient);
// export const publishJSON = (channel: string, json: any) =>
//   publishAsync(channel, JSON.stringify(json));

export const pubClient = new RedisClient({
  host: 'localhost',
  port: 6379
});

export const subClient = pubClient.duplicate();
const redisAdapter = createAdapter({ pubClient, subClient });

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
