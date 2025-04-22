// // app.service.ts
// import { Injectable } from '@nestjs/common';
// import { InjectQueue } from '@nestjs/bull';
// import { Queue } from 'bull';

// @Injectable()
// export class AppService {
//   constructor(@InjectQueue('hello') private readonly helloQueue: Queue) {}

//   async sendToQueue(data: any) {
//     await this.helloQueue.add('sendMessage', data);
//     return "sendToQueue : "
//   }
// }


// // app.service.ts
// import { Injectable, Inject } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';

// @Injectable()
// export class AppService {
//   constructor(
//     @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
//   ) {}

//   async sendToQueue(data: any) {
//     return this.client.send({ cmd: 'sendMessage' }, data);
//   }
// }

// // app.service.ts
// import { Inject } from '@nestjs/common';
// import { Injectable } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';

// @Injectable()
// export class AppService {
//   constructor(
//     @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
//   ) {}

//   async sendToQueue(data: any) {
//     return this.client.send({ cmd: 'sendMessage' }, data); // Send message to queue
//   }
// }
