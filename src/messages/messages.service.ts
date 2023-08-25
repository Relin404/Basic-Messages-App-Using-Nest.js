import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async create(content: string) {
    return await this.messagesRepo.create(content);
  }
}
