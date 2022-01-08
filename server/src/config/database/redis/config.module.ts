import { Module } from '@nestjs/common';
import { RedisConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        REDIS_HOST: Joi.string().default('localhost'),
        REDIS_PORT: Joi.number().default(6379)
      })
    })
  ],
  providers: [ConfigService, RedisConfigService],
  exports: [ConfigService, RedisConfigService]
})
export class RedisConfigModule {}
