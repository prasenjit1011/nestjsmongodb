
import { Test, TestingModule } from '@nestjs/testing';
import { FoodService } from './food.service';
import { FoodRepository } from './food.repository';
import { NotFoundException } from '@nestjs/common';

describe('FoodService', () => {
  let foodService: FoodService;
  let foodRepository: FoodRepository;

  const mockFoodRepository = {
    findAll: jest.fn().mockResolvedValue([{ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }]),
    findOne: jest.fn().mockResolvedValue({ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }),
    create: jest.fn().mockResolvedValue({ id: '1', name: 'Burger', category: 'Fast Food', price: 8 }),
    remove: jest.fn().mockResolvedValue({ deleted: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodService, { provide: FoodRepository, useValue: mockFoodRepository }],
    }).compile();

    foodService = module.get<FoodService>(FoodService);
  });

  it('should return all food items', async () => {
    expect(await foodService.findAll()).toEqual([{ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }]);
  });

  it('should remove a food item', async () => {
    expect(await foodService.remove('1')).toEqual({ deleted: true });
  });
});
