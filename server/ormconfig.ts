import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './src/entity/user.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'JunClass',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/**/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true
};

export = ormconfig;
