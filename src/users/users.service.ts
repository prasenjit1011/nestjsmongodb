import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(email: string) {
    return this.users.find(u => u.email === email);
  }

  remove(email: string) {
    this.users = this.users.filter(u => u.email !== email);
    return { message: 'User removed' };
  }
}
