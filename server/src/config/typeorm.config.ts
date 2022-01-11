import path from 'path';
import { Users } from '../models/users/users.entities';
import { Gathering } from '../models/gathering/gathering.entities';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Chat } from '../models/chat/chat.entities';
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
    Gathering,
    Chat
    // path.join(path.resolve(__dirname, '../../dist/src/**/*.entity{.ts,.js}'))
  ],
  synchronize: false,
  logging: true,
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
