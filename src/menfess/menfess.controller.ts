import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MenfessService } from './menfess.service';

@Controller('menfess')
export class MenfessController {
  constructor(private readonly menfessService: MenfessService) {}
  @Post('/add')
  async addMessage(@Body() body): Promise<any> {
    const { from, to, message } = body;
    return await this.menfessService.addMessage({
      from,
      to,
      message,
    });
  }

  @Get('/get')
  async getMessage(@Query('id') id: string): Promise<any> {
    if (!id) return await this.menfessService.getMessage();
    return await this.menfessService.getMessage(id);
  }
}
