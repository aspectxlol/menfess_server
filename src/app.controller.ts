import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message/add')
  async addMessage(@Req() req: Request): Promise<any> {
    const {from, to, message} = req.body
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
