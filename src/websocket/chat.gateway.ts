import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  import { RedisService } from './redis.service';
  import { OnEvent } from '@nestjs/event-emitter';
  
  @WebSocketGateway({ cors: true })
  export class ChatGateway {
    @WebSocketServer()
    server: Server;
  
    constructor(private readonly redisService: RedisService) {}
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
      console.log('Received message:', message);
      this.redisService.publish('chat-channel', message);
    }
  
    @OnEvent('redis.chat-channel')
    broadcastMessage(msg: string) {
      console.log('Broadcasting message:', msg);
      this.server.emit('message', msg);
    }
  }
  