// lambda.ts or main.ts depending on how you've structured it
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { SqsService } from './sqs.service';

let app;

export const handler = async (event, context) => {
  if (!app) {
    const appContext = await NestFactory.createApplicationContext(AppModule);
    app = appContext.get(SqsService);
  }

  for (const record of event.Records) {
    const message = record.body;
    await app.handleMessage(message);
  }

  return {
    statusCode: 200,
    body: 'Processed successfully',
  };
};



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
