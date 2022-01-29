import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    // const message = exception.message;
    // const exceptionRes = exception.getResponse();
    // const message = exceptionRes;
    console.log(exception);
    response.status(200).json({
      statusCode: 200,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: 'sucess'
    });
  }
}
