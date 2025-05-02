// sns.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

@Injectable()
export class SnsService {
  private snsClient = new SNSClient({ region: 'us-east-1' });
  private readonly logger = new Logger(SnsService.name);


  async handleSnsMessage(message: string) {
    this.logger.log(`Received SNS Service message 756 : ${message} `);
    // Add your logic here
  }

  async publishMessage(message: string, topicArn: string): Promise<void> {

    this.logger.log(`Published SNS Service message 756 : ${message} `);
    const command = new PublishCommand({
      Message: message,
      TopicArn: topicArn,
    });
    await this.snsClient.send(command);
  }
}


// Step 01
// import { Injectable, Logger } from '@nestjs/common';

// @Injectable()
// export class SnsService {
//   private readonly logger = new Logger(SnsService.name);

//   async handleSnsMessage(message: string) {
//     this.logger.log(`Received SNS message 2341 : ${message} `);
//     // Add your logic here
//   }
// }
