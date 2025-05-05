import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway as ChatGatewayRedis } from './websocket/chat-redis.gateway';
import { ChatGateway as ChatGatewayRabitmq } from './websocket/chat-rabitmq.gateway';
import { RedisService } from './websocket/redis.service';
import { RabbitMQService } from './websocket/rabbit.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { join } from 'path';


@Module({
  imports: [
    EventEmitterModule.forRoot(),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'chat_exchange',
          type: 'fanout',
        },
      ],
      uri: 'amqp://localhost:5672',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // <-- path to /public
    })
  ],
  controllers: [AppController],
  providers: [AppService, ChatGatewayRedis, RedisService, ChatGatewayRabitmq, RabbitMQService],
})
export class AppModule {}
