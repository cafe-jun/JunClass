import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { envConfig } from './config/envConfig';
// import { DatabaseConfig } from './config/databaseConfig';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './config/typeorm.config';
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
