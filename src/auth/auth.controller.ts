// auth.controller.ts
// import { Controller, Post, Request, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('login')
//   async login(@Request() req) {
//     const user = await this.authService.validateUser(req.body.username, req.body.password);
//     if (!user) throw new Error('Unauthorized');
//     return this.authService.login(user);
//   }
// }
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {

    const user = await this.authService.validateUser(req.body.username, req.body.password);
    if (!user){
      return {"msg":"Error"};
      //throw new Error('Unauthorized');
    }
    
    console.log('Userdata : ',user);
    // Implement your login logic here
    return this.authService.login(user);
  }
}
