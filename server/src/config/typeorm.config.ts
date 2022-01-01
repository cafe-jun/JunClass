import path from 'path';
import { Users } from '../models/users/users.entity';
import { Gathering } from '../models/gathering/gathering.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
// import * as config from 'config';
// const dbConfig = config.get('db');

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'JunClass',
  entities: [
    Users,
    Gathering
    // path.join(path.resolve(__dirname, '../../dist/src/**/*.entity{.ts,.js}'))
  ], //[User, Gathering],
  migrations: [
    path.join(
      path.resolve(__dirname, '../../dist/src/db/migrations/*{.ts,.js}')
    )
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};

export default config;
