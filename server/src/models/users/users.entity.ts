import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import { Gathering } from '../gathering/gathering.entity';

@Entity('Users')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar', { name: 'email', unique: true, length: 50 })
  email: string;
  @Column('int', { name: 'age' })
  age: number;
  @Column('varchar', { name: 'password', length: 200, select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Gathering, (gathering) => gathering.users)
  gathering: Gathering[];
}
