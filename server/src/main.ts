import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RedisIoAdapter } from './adapters/redis.adapter';
import { SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';
import passport from 'passport';
import { BaseAPIDocumentation } from './common/swagger/base.document';
import { AllExceptionsFilter } from './common/exceptions/all-exception.filter';
import { RedisIoAdapter } from './adapters/redis.adapter';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { CustomValidationPipe } from './common/pipe/validation.pipe';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const appConfig = app.get<AppConfigService>(AppConfigService);
  const logger = new Logger('Main');

  app.enableCors({
    origin: ['http://localhost:3095'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  });
  const documentOption = new BaseAPIDocumentation().initializeOptions();
  const document = SwaggerModule.createDocument(app, documentOption);
  const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidNonWhitelisted: true })
  );
  // app.useWebSocketAdapter(new RedisIoAdapter(app));

  app.use(helmet());
  SwaggerModule.setup('v1/docs', app, document);
  logger.log(`Application${appConfig.port} Port  Running`);

  await app.listen(appConfig.port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
