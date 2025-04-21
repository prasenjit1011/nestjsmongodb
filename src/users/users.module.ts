import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';
import { Review, ReviewSchema } from 'src/reviews/review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: Review.name, schema: ReviewSchema }
  ])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
