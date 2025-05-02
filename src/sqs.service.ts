// src/sqs/sqs.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SqsService {
  async handleMessage(message: any): Promise<void> {
    console.log('Received SQS message 1156:', message);
    // Add business logic here
  }
}
