// sns.controller.ts
import { Controller, Post, Req } from '@nestjs/common';

@Controller('sns')
export class SnsController {
  @Post()
  async handleSnsMessage(@Req() req): Promise<any> {
    const snsRecord = req.body.Records?.[0];
    if (snsRecord?.Sns) {
      const message = snsRecord.Sns.Message;
      console.log('SNS Message Received:', message);
      // process your message here
    }
    return { status: 'ok' };
  }
}
