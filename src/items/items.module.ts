import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Items, ItemsSchema } from './items.schema';
import { ItemsRepository } from './items.repository';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Items',
    schema: ItemsSchema,
  }])],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepository],
})
export class ItemsModule {}
