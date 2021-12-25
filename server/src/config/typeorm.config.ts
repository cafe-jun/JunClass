import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
// import { User } from './src/user/user.entity';
// import { Gathering } from './src/gathering/gathering.entity';
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
  entities: ['/../**/*.entity{.ts,.js}'],
  migrations: [path.join(path.resolve(__dirname), '/src/db/migrations/*.js')],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
};

export default config;
