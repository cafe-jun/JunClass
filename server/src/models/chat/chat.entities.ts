import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column()
  senderId: string;
  @Column()
  receiverdId: string;
  @Column('text', { name: 'content' })
  content: string;
  @CreateDateColumn()
  createdAt: Date;
}
