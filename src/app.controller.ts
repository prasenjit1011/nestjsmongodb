import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SnsService } from './sns.service';

@Controller()
export class AppController {
  constructor(
    private readonly snsService: SnsService,
    private readonly appService: AppService
  ) {}

  @Get('notify')
  async sendNotification() {
    const message = "SNS msg 759";
    const topicArn = 'arn:aws:sns:us-east-1:466015320752:MySNSTopic';
    await this.snsService.publishMessage(message, topicArn);
    return { status: 'Message sent to SNS topic' };
  }



  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
