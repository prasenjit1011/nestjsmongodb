import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  publishMessage(data: any) {
    if(typeof(data) == 'string'){
      console.log(typeof data)
      let message = "RabitMQ Msg : "+data;
      this.amqpConnection.publish('chat_exchange', '', message);
    }
  }
}
