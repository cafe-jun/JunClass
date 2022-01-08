import { CacheModule, CacheModuleOptions, Module } from '@nestjs/common';
import { RedisConfigService } from '../../../config/database/redis/config.service';
import { RedisConfigModule } from '../../../config/database/redis/config.module';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [RedisConfigModule],
      useFactory: async (
        redisConfigService: RedisConfigService
      ): Promise<CacheModuleOptions> => ({
        store: redisStore,
        host: redisConfigService.host,
        port: redisConfigService.port
      }),
      inject: [RedisConfigService]
    } as CacheModuleOptions)
  ]
})
export class RedisProviderModule {}
