import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService){}//private usersService: UsersService) {}//private jwtService: JwtService

  async signIn(username: string, pass: string): Promise<any> {
    const user = {password:'12345', firstname:"Riyan"};//await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    const access_token = await this.jwtService.signAsync(result)
    
    result['rndInt'] = Math.floor(Math.random() * 10000) + 1
    result['access_token'] = access_token
    console.log('Userdata : ',result, access_token);

    return result;
  }
}
