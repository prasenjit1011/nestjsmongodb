import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  private readonly redis: Redis;
  private publisher: Redis;

  constructor() {
    this.redis = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  }

  async setKey(key: string, value: string){
    await this.redis.set(key, value);
    await this.redis.publish('mykey', `${key} updated to ${value}`);
    console.log('---mykey:set---')
  }
}
