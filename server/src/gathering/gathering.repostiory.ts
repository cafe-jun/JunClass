import { Repository, EntityRepository } from 'typeorm';
import { Gathering } from 'src/entity/gathering.entity';

@EntityRepository(Gathering)
export class GatheringRepository extends Repository<Gathering> {}
