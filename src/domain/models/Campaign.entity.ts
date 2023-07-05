import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Purchase } from './Purchase.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Branch } from './Branch.entity';
import { Commerce } from './Commerce.entity';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  startDate: Date;

  @Column()
  @ApiProperty()
  endDate: Date;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  multiplierPoints: number;

  @Column()
  @ApiProperty()
  multiplierCashback: number;

  @Column()
  @ApiProperty()
  isActive: boolean;

  @ManyToOne(() => Commerce, (commerce) => commerce.campaigns)
  commerce: Commerce;

  @ManyToOne(() => Branch, (branch) => branch.campaigns)
  branch: Branch;

  @OneToMany(() => Purchase, (purchase) => purchase.campaign)
  purchases: Purchase[];
}
