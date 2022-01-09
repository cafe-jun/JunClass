import { EntityRepository, Repository } from 'typeorm';
import { Chat } from './chat.entities';

@EntityRepository(Chat)
export class ChatRepository extends Repository<Chat> {}
