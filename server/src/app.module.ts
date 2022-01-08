import { Module, NestModule, Inject, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './models/users/users.module';
import config from './config/typeorm.config';
import { GatheringModule } from './models/gathering/gathering.module';
import { ChatModule } from './models/chat/chat.module';
import { AppConfigModule } from './config/app/config.module';
import { AuthModule } from './models/auth/auth.module';
import { RedisProviderModule } from './providers/cache/redis/provider.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    RedisProviderModule,
    AppConfigModule,
    UserModule,
    GatheringModule,
    ChatModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
/*implements NestModule {*/
// constructor(@Inject(REDIS) private readonly redisClient: RedisClient) {}
// configure(consumer: MiddlewareConsumer) {
//   consumer
//     .apply(
//       session({
//         store: new (RedisStore(session))({
//           client: this.redisClient,
//           logErrors: true
//         }),
//         saveUninitialized: false,
//         secret: 'JunClass',
//         resave: false,
//         cookie: {
//           sameSite: true,
//           httpOnly: false,
//           maxAge: 60000
//         }
//       })
//     )
//     .forRoutes('*');
// }
//}
