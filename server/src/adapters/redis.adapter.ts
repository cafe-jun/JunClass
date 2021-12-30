import { IoAdapter } from '@nestjs/platform-socket.io';
import { RedisClient } from 'redis';
import { ServerOptions } from 'socket.io';
import { createAdapter } from 'socket.io-redis';
export const pubClient = new RedisClient({ host: 'localhost', port: 6379 });
export const subClient = pubClient.duplicate();
const redisAdapter = createAdapter({ pubClient, subClient });

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    console.log(port, options);
    const server = super.createIOServer(port, options);
    server.adapter(redisAdapter);
    return server;
  }
}
