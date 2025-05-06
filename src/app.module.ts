import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { ChatGateway as ChatGatewayRedis } from './websocket/redis-chat.gateway';
import { ChatGateway as ChatGatewayRabitmq } from './websocket/rabbitmq-chat.gateway';
import { RedisService } from './websocket/redis-chat.service';
import { RabbitMQService } from './websocket/rabbitmq-chat.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ChatGateway as ChatGatewayPie } from './websocket/redis-chat-pie-chart.gateway';
import { join } from 'path';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';


@Module({
  imports: [
    EventEmitterModule.forRoot(),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'chat_exchange',
          type: 'fanout',
        },
        {
          name: 'number_exchange',
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
  providers: [
    ChatGatewayRedis, RedisService, 
    ChatGatewayRabitmq, RabbitMQService, 
    ChatGatewayPie
  ],
})
export class AppModule {}
