// lambda.ts or main.ts depending on how you've structured it
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler, SNSEvent } from 'aws-lambda';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

// let cachedServer: Handler;

// async function bootstrap(): Promise<Handler> {
//   const app = await NestFactory.create(AppModule);
//   await app.init();
//   const expressApp = app.getHttpAdapter().getInstance();
//   return serverlessExpress({ app: expressApp });
// }

// export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
//   cachedServer ??= await bootstrap();
//   return cachedServer(event, context, callback);
// };

const expressApp = express();
let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  console.log('Received event:', JSON.stringify(event));

  // Optional: Directly handle SNS messages without Express
  if (event.Records?.[0]?.EventSource === 'aws:sns') {
    const snsEvent = event as SNSEvent;
    const message = snsEvent.Records[0].Sns.Message;
    console.log('SNS Message:', message);

    // Do something custom with the message
    // You could call a NestJS service manually here if needed

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'SNS message processed' }),
    };
  }

  server ??= await bootstrap();
  return server(event, context, callback);
};
