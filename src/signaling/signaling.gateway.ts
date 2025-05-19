import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SignalingGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, room: string) {
    client.join(room);
    const clients = this.server.sockets.adapter.rooms.get(room);
    if (clients && clients.size === 2) {
      client.to(room).emit('ready');
    }
  }

  @SubscribeMessage('offer')
  handleOffer(client: Socket, data: { room: string; offer: any }) {
    client.to(data.room).emit('offer', data.offer);
  }

  @SubscribeMessage('answer')
  handleAnswer(client: Socket, data: { room: string; answer: any }) {
    client.to(data.room).emit('answer', data.answer);
  }

  @SubscribeMessage('ice-candidate')
  handleCandidate(client: Socket, data: { room: string; candidate: any }) {
    client.to(data.room).emit('ice-candidate', data.candidate);
  }
}
