import { Injectable } from '@nestjs/common';
import { addSong, getSong } from 'src/database/database';
import { Song } from 'src/database/models/Song';

@Injectable()
export class SongfessService {
  async addSong(song: addSong): Promise<Song> {
    return await addSong(song);
  }

  async getSong(id?: string): Promise<any> {
    return await getSong(id);
  }
}
