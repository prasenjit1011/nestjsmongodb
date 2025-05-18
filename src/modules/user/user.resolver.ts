import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.userService.create(username, password);
  }

  @Query(() => User, { name: 'getUser' })
  async getUserById(@Args('id') id: string) {
    return this.userService.findAll();
  }

  @Query(() => [User], { name: 'getUserList' })
  async getUserList() {
    console.log('-: User Listing Api :-')
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'getUser' })
  async getUserDataById(@Args('id') id: string) {
    return this.userService.findAll();
  }
  

}
