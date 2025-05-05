import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './websocket/chat.gateway';
import { RedisService } from './websocket/redis.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // <-- path to /public
    })
  ],
  controllers: [AppController],
  providers: [AppService,ChatGateway, RedisService],
})
export class AppModule {}
