import { Module } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';
import { RedisConfigService } from '../../config/database/redis/config.service';
import { RedisConfigModule } from '../../config/database/redis/config.module';
@Module({
  imports: [
    RedisModule.forRootAsync({
      imports: [RedisConfigModule],
      useFactory: async (
        redisConfigService: RedisConfigService
      ): Promise<RedisModuleOptions> => ({
        host: redisConfigService.host,
        port: redisConfigService.port
      }),
      inject: [RedisConfigService]
    })
  ]
})
export class RedisProviderModule {}
