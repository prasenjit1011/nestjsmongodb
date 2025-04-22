// // app.module.ts
// import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
// import { AppController } from './app.controller';
// import { ClientsModule, Transport } from '@nestjs/microservices';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'RABBITMQ_SERVICE',
//         transport: Transport.RMQ,
//         options: {
//           urls: ['amqp://localhost:5672'], // RabbitMQ server
//           queue: 'hello_queue',
//           queueOptions: {
//             durable: false,
//           },
//         },
//       },
//     ]),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


