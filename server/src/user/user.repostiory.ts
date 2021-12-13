import { Repository, EntityRepository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
