import { User } from '../entity/User';

export const envConfig = () => ({
  port: process.env.PORT || 3000,
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    entities: [User],
    migrations: ['../migration/**/*.ts'],
    subscribers: ['../subscriber/**/*.ts'],
    keepConnectionAlive: true,
    autoLoadEntities: true,
    charset: 'utf8mb4',
    synchronize: false,
    cli: {
      entitiesDir: '../entity',
      migrationsDir: '../migration',
      subscribersDir: '../subscriber'
    }
  }
});
