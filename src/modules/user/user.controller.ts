import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { username: string; password: string }): Promise<User> {
    const { username, password } = body;
    return this.userService.create(username, password);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    // This should ideally call a method like `findById(id)`
    return this.userService.findById(id); // Adjust based on your actual method
  }

  @Get()
  async getUserList(): Promise<User[]> {
    console.log('-: User Listing Api :-');
    return this.userService.findAll();
  }

  // NOTE: The duplicate GraphQL query `getUser` removed to avoid redundancy
}
