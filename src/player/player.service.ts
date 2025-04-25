// src/player/player.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  // async create(createPlayerDto: CreatePlayerDto){
  //   const player = this.playerRepository.create(createPlayerDto);
  //   return await this.playerRepository.save(player);
  // }

  async create(data: Partial<Player>){
    const player = this.playerRepository.create(data);
    return await this.playerRepository.save(player);
  }


  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find({order:{id:'DESC'}});
  }

  // async findOne(id: number){
  //   //return 'Product Details'
  //   return await this.playerRepository.findOne(id);
  // }

  // async update(id: number, updatePlayerDto: CreatePlayerDto): Promise<Player> {
  //   await this.playerRepository.update(id, updatePlayerDto);
  //   return this.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.playerRepository.delete(id);
  // }
}
