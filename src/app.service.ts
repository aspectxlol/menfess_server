import { Injectable } from '@nestjs/common';
import { addMessage, addMSG, getMessage } from './database/database';
import { message } from './database/models/messages';

@Injectable()
export class AppService {
  async addMessage(message: addMSG): Promise<message> {
    return await addMessage({
      from: message.from,
      to: message.to,
      message: message.message,
    })
  }

  async getMessage(id?: string): Promise<any> {
    return await getMessage(id)
  }
}
