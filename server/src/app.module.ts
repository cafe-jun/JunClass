import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';
// import { envConfig } from './config/envConfig';
// import { DatabaseConfig } from './config/databaseConfig';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { GatheringModule } from './gathering/gathering.module';
import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    AuthModule,
    GatheringModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
