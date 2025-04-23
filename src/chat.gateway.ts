// src/chat.gateway.ts
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  })
  export class ChatGateway {
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
      console.log('Received:', message);
      this.server.emit('message', `Server says: ${message}`);
    }
  }