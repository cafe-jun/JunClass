import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './adapters/redis.adapter';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const appConfig = app.get<AppConfigService>(AppConfigService);
  // const configService = app.get(ConfigService);
  // const port = configService.get('PORT');
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  await app.listen(appConfig.port);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
