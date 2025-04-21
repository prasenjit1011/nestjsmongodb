
import { Injectable, NotFoundException } from '@nestjs/common';
import { FoodRepository } from './food.repository';
import { CreateFoodDto } from './create-food.dto';

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  async findAll() {
    return this.foodRepository.findAll();
  }

  async findOne(id: string) {
    const food = await this.foodRepository.findOne(id);
    if (!food) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return food;
  }

  async create(createFoodDto: CreateFoodDto) {
    return this.foodRepository.create(createFoodDto);
  }

  async remove(id: string) {
    const result = await this.foodRepository.remove(id);
    if (!result.deleted) {
      throw new NotFoundException(`Food with ID ${id} not found`);
    }
    return result;
  }
}
