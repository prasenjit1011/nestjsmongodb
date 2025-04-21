import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Review, ReviewSchema } from './review.schema';
import { User, UserSchema } from 'src/users/users.schema';
import { Product, ProductSchema } from 'src/products/product.schema';
import { Acknowledgment, AcknowledgmentSchema } from 'src/acknowledgments/acknowledgment.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Review.name, schema: ReviewSchema },
    { name: User.name, schema: UserSchema },
    { name: Product.name, schema: ProductSchema },
    { name: Acknowledgment.name, schema: AcknowledgmentSchema }
  ])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
