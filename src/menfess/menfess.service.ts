import { Injectable } from '@nestjs/common';
import { addMessage, addMSG, getMessage } from 'src/database/database';
import { message } from 'src/database/models/Message';

@Injectable()
export class MenfessService {
  async addMessage(message: addMSG): Promise<message> {
    return await addMessage(message);
  }

  async getMessage(id?: string): Promise<any> {
    return await getMessage(id);
  }
}
