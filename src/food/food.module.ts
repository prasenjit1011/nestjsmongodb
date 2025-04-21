
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { FoodRepository } from './food.repository';
import { Food, FoodSchema } from './food.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService, FoodRepository],
})
export class FoodModule {}
