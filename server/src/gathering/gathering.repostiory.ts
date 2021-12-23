import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from './gathering.entity';

@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {}
