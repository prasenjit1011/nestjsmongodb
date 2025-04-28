import { Injectable } from '@nestjs/common';
//import { PinoLoggerService  } from './plugin/pino.logger';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(private readonly logger: PinoLogger) {}

  getHello(): string {
    this.logger.info('Fetching hello world message');
    return 'Hello World!';
  }
}
