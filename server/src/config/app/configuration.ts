import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
  secret_cookie: process.env.APP_SECRET_COOKIE
}));
