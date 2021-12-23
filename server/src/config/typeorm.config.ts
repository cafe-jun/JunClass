import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Gathering } from '../gathering/gathering.entity';
// import * as config from 'config';
// const dbConfig = config.get('db');

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
  entities: [__dirname + '/../**/*.entity.{js,ts}']
  // migrations: ['/../migrations/*js']
  // cli: {
  //   migrationsDir: 'src/db/migrations'
  // }
};
