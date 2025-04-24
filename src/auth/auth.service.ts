// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    if (username === 'admin' && pass === 'password') {
      return { userId: 1, username: 'admin', fullname: 'Chanakya Dialogues' };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, userId: user.userId, fullname: user.fullname };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
