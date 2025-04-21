import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './review.schema';
import { ReviewDTO } from './review.dto';

import { User, UserDocument } from 'src/users/users.schema';
import { Product, ProductDocument } from 'src/products/product.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async create(createReviewDto: ReviewDTO): Promise<Review> {
    // ✅ Ensure reviewData is awaited
    const reviewData = await this.reviewModel.create(createReviewDto);
  
    // ✅ Update the user (correct)
    const userData = await this.userModel.findByIdAndUpdate(
      createReviewDto.userId,
      { $push: { reviews: reviewData._id } },
      { new: true }
    );
  
    
    // ✅ Update the product (corrected productId usage)
    const productData = await this.productModel.findByIdAndUpdate(
      createReviewDto.productId, // 🔥 FIXED: Use productId, not userId
      { $push: { reviews: reviewData._id } },
      { new: true }
    );
  
    return reviewData;
  }
  
  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().select('_id userId productId remarks acknowledgment').exec();
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewModel.findById(id).exec();
    if (!review) throw new NotFoundException('Service not found');
    return review;
  }

  async update(id: string, updateReviewDto: ReviewDTO): Promise<Review | null> {
    return this.reviewModel.findByIdAndUpdate(id, updateReviewDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.reviewModel.findByIdAndDelete(id).exec();
  }
}
