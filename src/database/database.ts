import mongoose from 'mongoose';
import Message from './models/Message';
import Song from './models/Song';
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
  const msg = new Message({
    from: message.from,
    to: message.to,
    message: message.message,
    id: v4(),
  });

  return await msg.save();
};

export const getMessage = async (id?: string) => {
  if (!id) {
    const result = await Message.find();
    return result;
  } else if (id) {
    const result = await Message.findOne({ id: id });
    return result;
  }
};

export interface addSong {
  from?: string;
  to?: string;
  song: {
    ytid: string;
    title: string;
  };
}

export const addSong = async (song: addSong) => {
  const tempSong = new Song({
    from: song.from,
    to: song.to,
    song: {
      ytid: song.song.ytid,
      title: song.song.title,
    },
  });
  return await tempSong.save();
};

export const getSong = async (id: string) => {
  if (!id) {
    const result = await Song.find();
    return result;
  } else if (id) {
    const result = await Song.findOne({ id: id });
    return result;
  }
};
