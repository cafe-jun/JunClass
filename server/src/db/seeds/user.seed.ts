import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Users } from '../../models/users/users.entities';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          email: 'jsshin@salin.co.kr'
        },
        {
          email: 'cafejun17@gmail.com'
        }
      ])
      .execute();
  }
}
