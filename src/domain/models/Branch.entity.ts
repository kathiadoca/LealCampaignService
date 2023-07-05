import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Commerce } from './Commerce.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Campaign } from './Campaign.entity';

@Entity('branch', { schema: 'public' })
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @ManyToOne(() => Commerce, (commerce) => commerce.branches)
  commerce: Commerce;

  @ManyToMany(() => Campaign)
  @JoinTable()
  campaigns: Campaign[];
}
