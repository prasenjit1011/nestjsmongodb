import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Redis } from 'ioredis';

const RedisClient = require('ioredis');

@Injectable()
export class RedisService implements OnModuleInit {
  private pub: Redis;
  private sub: Redis;

  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    this.pub = new RedisClient();
    this.sub = new RedisClient();

    this.sub.subscribe('chat-channel', (err, count) => {
      if (err) console.error('Redis subscribe error:', err);
    });

    this.sub.on('message', (channel: string, message: string) => {
      console.log(`Received from Redis [${channel}]:`, message);
      this.eventEmitter.emit(`redis.${channel}`, message);
    });
  }

  publish(channel: string, message: string) {
    message = "Redis Msg : "+message
    this.pub.publish(channel, message);
  }
}
