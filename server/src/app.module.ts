import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './config/envConfig';
import { DatabaseConfig } from './config/databaseConfig';
import { UserModule } from './user/user.module';
import * as ormconfig from '../ormconfig';

console.log(ormconfig);
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
