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
import { Users } from '../users/users.entities';

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

  @DeleteDateColumn({ select: false })
  deletedAt: Date;

  @ManyToOne(() => Users, (users) => users.gathering, {
    onDelete: 'RESTRICT'
  })
  users: Users;

  static register(
    title: string,
    thumbnail: string,
    type: string,
    user: Users
  ): Gathering {
    const gathering = new Gathering();
    gathering.title = title;
    gathering.thumbnail = thumbnail;
    gathering.type = type;
    gathering.users = user;
    return gathering;
  }
}
