import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { FaqModule } from './faqs/faq.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/product.module';
import { OrderModule } from './order/order.module';
import { ReviewModule } from './reviews/review.module';
import { AcknowledgmentModule } from './acknowledgments/acknowledgment.module';
import { ResolutionModule } from './resolutions/resolution.module';
import { FoodModule } from './food/food.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Load environment variables globally
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    FaqModule,
    UsersModule,
    ProductModule,
    OrderModule,
    ReviewModule,
    AcknowledgmentModule,
    ResolutionModule,
    ItemsModule,
    AuthModule,
    FoodModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
