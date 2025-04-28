import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PinoLoggerService } from './plugin/pino.logger';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        transport: {
          targets: [
            {
              target: 'pino-pretty', // for console
              options: { colorize: true }
            },
            {
              target: 'pino/file',
              options: {
                destination: './logs/error.log',
                level: 'error', // Only ERROR level will be stored here
              }
            }
          ]
        }
      }
    }),

  ],
  controllers: [AppController],
  providers: [AppService]//, PinoLoggerService],
})
export class AppModule {}
