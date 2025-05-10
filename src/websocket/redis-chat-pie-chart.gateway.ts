import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private userMessageCounts: Record<string, number> = {};

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { user: string; message: string }) {
    const { user, message } = data;
    
    this.userMessageCounts[user] = (this.userMessageCounts[user] || 0) + 1;

    if(typeof(data) == 'object'){
      data.user = 'Redis Pie : '+data.user;
    }
    
    console.log('--here--',data);
    this.server.emit('message', data);
    this.server.emit('stats', this.userMessageCounts);
  }
}
