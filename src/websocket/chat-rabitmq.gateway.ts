import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  import { RabbitMQService } from './rabbit.service';
  import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
  
  @WebSocketGateway()
  export class ChatGateway {
    @WebSocketServer()
    server: Server;
  
    constructor(private rabbit: RabbitMQService) {}
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
      this.rabbit.publishMessage(message);
    }
  
    @RabbitSubscribe({
      exchange: 'chat_exchange',
      routingKey: '',
      queue: 'chat_queue',
    })
    onChatMessage(msg: string) {
      this.server.emit('message', msg);
    }
  }
  