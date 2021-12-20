import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
// const dbConfig = config.get('db');
import { User } from '../entity/user.entity';
import { Gathering } from '../entity/gathering.entity';
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'JunClass',
  keepConnectionAlive: true,
  synchronize: true,
  logging: true,
  entities: [User, Gathering /*0__dirname +  'dist/entity/*.entity.{ts,js}'*/]
};
