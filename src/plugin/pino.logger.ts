import { LoggerService } from '@nestjs/common';
import pino from 'pino';

export class PinoLoggerService implements LoggerService {
  private readonly logger;

  constructor() {
    this.logger = pino({
      level: 'info', // Set the desired logging level (info, debug, etc.)
      transport: {
        target: 'pino-pretty', // Pretty print logs for development
        options: {
          colorize: true, // Optional: adds colors for readability
        },
      },
    });
  }

  log(message: any, context?: string) {
    this.logger.info({ context }, message);
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.error({ context, trace }, message);
  }

  warn(message: any, context?: string) {
    this.logger.warn({ context }, message);
  }

  debug(message: any, context?: string) {
    this.logger.debug({ context }, message);
  }

  verbose(message: any, context?: string) {
    this.logger.trace({ context }, message);
  }
}
