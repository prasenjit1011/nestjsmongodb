// src/player/player.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  team: string;

  @Column()
  dept: string;

  @Column('int')
  age: number;

  @Column('decimal', { precision: 5, scale: 2 })
  salary: number;
}
