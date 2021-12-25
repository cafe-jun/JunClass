import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import config from './config/typeorm.config';
// import config from '../ormconfig';
import { AuthModule } from './auth/auth.module';
import { GatheringModule } from './gathering/gathering.module';
import path from 'path';
console.log(path.join(path.resolve(__dirname), '/src/**/*.entity.js'));
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    GatheringModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
