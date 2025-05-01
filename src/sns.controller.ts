import { Controller, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SnsController {
  private readonly logger = new Logger(SnsController.name);

  async handleSnsMessage(message: string): Promise<void> {
    this.logger.log(`Received SNS message: ${message}`);

    // Parse and process your SNS message
    // const parsed = JSON.parse(message);
    // // Example business logic
    // this.logger.log(`Processed data: ${parsed?.data}`);
  }
}
