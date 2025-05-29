import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs lambda_01_cicd_04 : 29May2025 : 1142 '+(new Date).getMilliseconds();
  }
}
