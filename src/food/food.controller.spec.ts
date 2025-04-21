
import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { CreateFoodDto } from './create-food.dto';

describe('FoodController', () => {
  let foodController: FoodController;
  let foodService: FoodService;

  const mockFoodService = {
    findAll: jest.fn().mockResolvedValue([{ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }]),
    findOne: jest.fn().mockResolvedValue({ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }),
    create: jest.fn().mockImplementation((dto) => Promise.resolve({ id: '1', ...dto })),
    remove: jest.fn().mockResolvedValue({ deleted: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [{ provide: FoodService, useValue: mockFoodService }],
    }).compile();

    foodController = module.get<FoodController>(FoodController);
  });

  it('should return all food items', async () => {
    expect(await foodController.findAll()).toEqual([{ id: '1', name: 'Pizza', category: 'Fast Food', price: 12 }]);
  });

  it('should create a food item', async () => {
    const dto: CreateFoodDto = { name: 'Burger', category: 'Fast Food', price: 8 };
    expect(await foodController.create(dto)).toEqual({ id: '1', ...dto });
  });

  it('should remove a food item', async () => {
    expect(await foodController.remove('1')).toEqual({ deleted: true });
  });
});
