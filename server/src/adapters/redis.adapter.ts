import { IoAdapter } from '@nestjs/platform-socket.io';
import { createClient } from 'redis';
import { ServerOptions } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { RedisClient } from 'redis';
import Redis from 'ioredis';
// export const globalSubscriber = new RedisClient({
//   host: 'localhost',
//   port: 6379
// });
// const coreRedisClient = globalSubscriber.duplicate();

// export const publishJSON = (channel: string, json: any) =>
//   publishAsync(channel, JSON.stringify(json));

// const publishAsync = promisify(coreRedisClient.publish).bind(coreRedisClient);
const options = {
  port: 6379,
  host: '127.0.0.1'
};
const pubClient = new Redis(options);
const subClient = pubClient.duplicate();
const redisAdapter = createAdapter(pubClient, subClient, { key: 'channel' });

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
