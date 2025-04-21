import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from './update-item.dto';
//import { JwtAuthGuard } from 'src/auth/auth.guard';
//import { AuthGuard } from 'src/auth/auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('items')
@UseGuards(JwtAuthGuard)
export class ItemsController {
  constructor(private readonly service: ItemsService) {}

  @Post()
  create(@Body() dto: CreateItemDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateItemDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Get('mylogin')
  itemlogin(){
    return { token: '12345', fname: 'Prasenjit' };
  }
}
