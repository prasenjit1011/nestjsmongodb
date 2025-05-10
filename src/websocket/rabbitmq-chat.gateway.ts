import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server } from 'socket.io';
  import { RabbitMQService } from './rabbitmq-chat.service';
  import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
  
  @WebSocketGateway()
  export class ChatGateway {
    @WebSocketServer()
    server: Server;
  
    constructor(private rabbit: RabbitMQService) {}
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
      // let randNum = 'Random : '+(new Date).getMilliseconds();
      // this.rabbit.publishRandNumber(randNum);
      this.rabbit.publishMessage(message);      
    }

    @RabbitSubscribe({
      exchange: 'number_exchange',
      routingKey: 'mynumber',
      queue: 'number_queue',
    })

    @RabbitSubscribe({
      exchange: 'chat_exchange',
      routingKey: '',
      queue: 'chat_queue',
    })
    
    onChatMessage(msg: string) {
      console.log('Emited msg from backend');
      console.log('For Chat msg can be Emited from frontend or client');
      this.server.emit('randnumber', msg);
      //this.server.emit('message', msg);
    }
  }
  