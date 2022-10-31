import { model, Schema } from 'mongoose';

export interface Song {
  from: string;
  to: string;
  song: {
    ytid: string;
    title: string;
  };
  id: string;
}

export const song = new Schema<Song>({
  from: {
    type: 'String',
    required: false,
  },
  to: {
    type: 'String',
    required: false,
  },
  song: {
    ytid: {
      type: 'String',
      required: true,
    },
    title: {
      type: 'String',
      required: true,
    },
  },
  id: {
    type: 'String',
    required: true,
  },
});

export default model('Song', song);
