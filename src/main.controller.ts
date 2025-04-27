import { Controller, Get } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';

@Controller()
export class MainController {
  // Define a TCP client
  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3001 },  // Connecting to the microservice
  })
  private client: ClientTCP;

  // Use the microservice client to send a message
  @Get()
  async getHello() {
    const result = await this.client.send<string>('process_data', 'Test Data');
    return result; // Receives the processed result
  }
}
