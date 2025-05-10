import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  publishMessage(data: any) {
    if(typeof(data) == 'string'){
      let message = "RabitMQ Msg12 : "+data;
      this.amqpConnection.publish('chat_exchange', '', message);
    }
  }

  publishRandNumber(data: any) {
    let message = "RabitMQ RandNumber : "+data;
    this.amqpConnection.publish('number_exchange', 'mynumber', data);  
  }
}
