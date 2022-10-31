import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongfessController } from './songfess/songfess.controller';
import { MenfessController } from './menfess/menfess.controller';
import { SongfessService } from './songfess/songfess.service';
import { MenfessService } from './menfess/menfess.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, SongfessController, MenfessController],
  providers: [AppService, SongfessService, MenfessService],
})
export class AppModule {}
