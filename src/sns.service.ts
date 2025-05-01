import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SnsService {
  private readonly logger = new Logger(SnsService.name);

  async handleSnsMessage(message: string) {
    this.logger.log(`Received SNS message 2341 : ${message} `);
    // Add your logic here
  }
}
