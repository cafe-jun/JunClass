import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RedisIoAdapter } from './adapters/redis.adapter';
import { SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';
import passport from 'passport';
import { BaseAPIDocumentation } from './common/swagger/base.document';
import { AllExceptionsFilter } from './exceptions/all-exception.filter';
import { RedisIoAdapter } from './adapters/redis.adapter';
import { Logger } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  const logger = new Logger('Main');
  // const configService = app.get(ConfigService);
  // const port = configService.get('PORT');
  // app.useWebSocketAdapter(new RedisIoAdapter(app));
  // app.use(passport.initialize());
  // app.use(passport.session());
  const documentOption = new BaseAPIDocumentation().initializeOptions();
  const document = SwaggerModule.createDocument(app, documentOption);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  SwaggerModule.setup('v1/docs', app, document);
  logger.log(`Application${appConfig.port} Port  Running`);
  await app.listen(appConfig.port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
