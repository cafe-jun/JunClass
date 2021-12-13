import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'JunClass',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}']
};
