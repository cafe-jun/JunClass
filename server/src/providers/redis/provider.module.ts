import { Module } from '@nestjs/common';
import { defaultCipherList } from 'constants';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    })
  ]
})
export class RedisProviderModule {}
