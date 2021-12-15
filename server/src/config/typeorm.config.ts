import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
// const dbConfig = config.get('db');
import { User } from '../entity/user.entity';
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'JunClass',
  keepConnectionAlive: true,
  synchronize: false,
  logging: true,
  entities: [User /*0__dirname +  'dist/entity/*.entity.{ts,js}'*/]
};
