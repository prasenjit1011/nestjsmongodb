
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './create-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  async findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.foodService.findOne(id);
  }

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.foodService.remove(id);
  }
}
