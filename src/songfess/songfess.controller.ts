import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ytSeacrhTypes } from 'src/types';
import { SongfessService } from './songfess.service';

@Controller('songfess')
export class SongfessController {
  constructor(
    private readonly songfessService: SongfessService,
    private readonly httpService: HttpService,
  ) {}

  @Post('/add')
  async addSong(@Body() body): Promise<any> {
    const { from, to, song } = body;
    return await this.songfessService.addSong({
      from,
      to,
      song,
    });
  }

  @Get('/get')
  async getSong(@Query('id') id): Promise<any> {
    if (!id) return await this.songfessService.getSong();
    return await this.songfessService.getSong(id);
  }

  @Get('/ytquery')
  async queryYoutube(@Query('query') query: string): Promise<any> {
    const ENDPOINT = 'https://www.googleapis.com/';
    const API_KEY = process.env.API_KEY;
    //,
    const data = (
      await this.httpService.axiosRef.get(
        `${ENDPOINT}/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&q=${query}&maxResults=3`,
      )
    ).data as ytSeacrhTypes;
    const resData = [];
    await data.items.forEach((data) => {
      resData.push({
        title: data.snippet.title,
        description: data.snippet.description,
        thumbnail: data.snippet.thumbnails.high,
        publishedAt: data.snippet.publishedAt,
      });
    });
    return resData;
  }
}
