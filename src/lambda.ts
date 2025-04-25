// lambda.ts or main.ts depending on how you've structured it
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure as serverlessExpress } from '@vendia/serverless-express';

let cachedServer: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  cachedServer ??= await bootstrap();
  return cachedServer(event, context, callback);
};

// import { Handler } from 'aws-lambda';
// import serverlessExpress from '@vendia/serverless-express';
// import { bootstrap } from './main'; // adjust path

// let cachedServer;

// async function bootstrapServer() {
//   if (!cachedServer) {
//     const app = await bootstrap();
//     cachedServer = serverlessExpress({ app });
//   }
//   return cachedServer;
// }

// export const handler: Handler = async (event, context) => {
//   const server = await bootstrapServer();
//   return server(event, context);
// };


//import { Callback, Context, Handler } from 'aws-lambda';
//import { configure as serverlessExpress } from '@vendia/serverless-express';
////import { createApp } from './main';

////let server: Handler;

//async function bootstrap(): Promise<Handler> {
  ////const app = await createApp();
  //await app.init();
  //const expressApp = app.getHttpAdapter().getInstance();
  //return serverlessExpress({ app: expressApp });
//}

//export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  //server ??= await bootstrap();
  //return server(event, context, callback);
//};
