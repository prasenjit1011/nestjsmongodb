
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food, FoodDocument } from './food.schema';
import { CreateFoodDto } from './create-food.dto';

@Injectable()
export class FoodRepository {
  constructor(@InjectModel(Food.name) private foodModel: Model<FoodDocument>) {}

  async findAll(): Promise<Food[]> {
    return this.foodModel.find().exec();
  }

  async findOne(id: string): Promise<Food | null> {
    return this.foodModel.findById(id).exec();
  }

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const newFood = new this.foodModel(createFoodDto);
    return newFood.save();
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.foodModel.deleteOne({ _id: id }).exec();
    return { deleted: result.deletedCount > 0 };
  }
}
