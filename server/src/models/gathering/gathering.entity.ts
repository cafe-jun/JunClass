import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn
} from 'typeorm';
import { Users } from '../users/users.entity';

@Entity({ name: 'Gathering' })
export class Gathering extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  thumbnail: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column('varchar', { name: 'ownerUserId', nullable: true })
  OwnerUserId: string | null;

  @JoinColumn([{ name: 'ownerUserId', referencedColumnName: 'id' }])
  User: Users;

  @ManyToOne(() => Users, (users) => users.gathering)
  users: Users[];
}
