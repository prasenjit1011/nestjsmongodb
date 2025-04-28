import { Test, TestingModule } from '@nestjs/testing';
import { ItemsRepository } from './items.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items } from './items.schema';

describe('ItemsRepository', () => {
  let repository: ItemsRepository;
  let model: Model<Items>;

  const mockItem = { _id: '123', name: 'Test Item', description: 'Demo' };

  const mockModel = {
    save: jest.fn(),
    find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockItem]) }),
    findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockItem) }),
    findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockItem) }),
    findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockItem) }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsRepository,
        {
          provide: getModelToken('Items'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockItem),
            constructor: jest.fn(),
            ...mockModel,
          },
        },
      ],
    }).compile();

    repository = module.get<ItemsRepository>(ItemsRepository);
    model = module.get<Model<Items>>(getModelToken('Items'));
  });

  it('should create an item', async () => {
    const saveMock = jest.fn().mockResolvedValue(mockItem);
  
    // Simulate `new this.model(data).save()` behavior
    const mockModelConstructor = jest.fn(() => ({ save: saveMock }));
  
    // Replace `model` instance in the repository
    (repository as any).model = mockModelConstructor;
  
    const result = await repository.create(mockItem);
  
    expect(saveMock).toHaveBeenCalled();
    expect(result).toEqual({ msg: 'Item created successfully!', item: mockItem });
  });
  

  it('should return all items', async () => {
    const result = await repository.findAll();
    console.log('Item List :::: ',result);
    expect(result).toEqual([mockItem]);
  });

  it('should return one item by ID', async () => {
    const result = await repository.findOne('67f49b2c111c0bf1503b20a6');
    console.log('Item Data :::: ',result);

    expect(result).toEqual(mockItem);
  });

  it('should update an item by ID', async () => {
    const result = await repository.update('67f49b2c111c0bf1503b20a6', { name: 'Updated' });
    console.log('Item Arr :::: ',result);

    expect(result).toEqual(mockItem);
  });

  it('should delete an item by ID', async () => {
    const result = await repository.remove('67f49b2c111c0bf1503b20a76');
    console.log('Item result :::: ',result);

    expect(result).toEqual(mockItem);
  });
});
