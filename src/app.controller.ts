import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { message } from './database/models/messages';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message/add')
  async addMessage(@Body() body): Promise<message> {
    const { from, to, message } = body
    return await this.appService.addMessage({
      from,
      to,
      message
    })
  }

  @Get('/message/get')
  async getMessage(@Query('id') id: string): Promise<any> {
    if(!id) return await this.appService.getMessage()
    return await this.appService.getMessage(id)
  }
}
