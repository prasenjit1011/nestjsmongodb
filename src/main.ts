import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { SqsService } from './sqs.service';


let app = null;

export const handler = async (event: any, context: any) => {
  if (!app) {
    const nestApp = await NestFactory.createApplicationContext(AppModule);
    app = nestApp.get(SqsService);
  }

  // Loop through each record (SQS supports batch)
  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    await app.handleMessage(body);
  }

  return {
    statusCode: 200,
    body: 'Processed',
  };
};


// Step 01

// const expressApp = express();
// let server: Handler;

// async function bootstrap(): Promise<Handler> {
//   const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
//   await app.init();
//   return serverlessExpress({ app: expressApp });
// }

// export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
//   server ??= await bootstrap();
//   return server(event, context, callback);
// };



