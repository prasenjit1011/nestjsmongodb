import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  publishMessage(message: string) {
    message = "RabitMQ Msg : "+message;
    this.amqpConnection.publish('chat_exchange', '', message);
  }
}
