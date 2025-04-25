// src/player/player.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './player.entity';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  // @Post()
  // create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
  //   return this.playerService.create(createPlayerDto);
  // }

  @Get()
  async findAll() {
    const t = (new Date).getMilliseconds();
    await this.playerService.create({"name":"Ram : "+t });
    return this.playerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<Player> {
  //   return this.playerService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updatePlayerDto: CreatePlayerDto): Promise<Player> {
  //   return this.playerService.update(id, updatePlayerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number): Promise<void> {
  //   return this.playerService.remove(id);
  // }
}
