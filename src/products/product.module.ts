import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './product.schema';
import { Review, ReviewSchema } from 'src/reviews/review.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Product.name, schema: ProductSchema },
    { name: Review.name, schema: ReviewSchema }
  ])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
