import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(){
    const msg = 'Hello from microservice! '+process.env.PORT;
    return {msg}
  }

  // Create a simple method to be called by the microservice
  async processData(data: string): Promise<string> {
    return `Processed: ${data}`;
  }
}
