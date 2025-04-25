
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private client: ClientProxy;

  async onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'test_queue',
        queueOptions: {
          durable: false,
        },
      },
    });

    await this.client.connect();
  }

  async sendMessage(message) {
    console.log('📥 Rabitmq Provider Sending Msg : ', message);
    const result = await this.client.send('test_route', { message }).toPromise();
    return result;
  }
}
