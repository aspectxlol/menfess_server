import mongoose from 'mongoose';
import messages from './models/messages';
import 'dotenv/config';
import { v4 } from 'uuid';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to the databse');
  })
  .catch((err) => {
    console.error(err);
  });

export interface addMSG {
  from?: string;
  to?: string;
  message: string;
}
export const addMessage = async (message: addMSG) => {
  const msg = new messages({
    from: message.from,
    to: message.to,
    message: message.message,
    id: v4(),
  });

  return await msg.save();
};

export const getMessage = async (id?: string) => {
  if (!id) {
    const result = await messages.find();
    return result;
  } else if (id) {
    const result = await messages.findOne({ id: id });
    return result;
  }
};
