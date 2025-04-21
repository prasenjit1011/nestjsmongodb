import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from './update-item.dto';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly repo: ItemsRepository) {}

  create(dto: CreateItemDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, dto: UpdateItemDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.remove(id);
  }
}
