import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique
} from 'typeorm';

@Entity('User')
@Unique(['name'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  password: string;
}
