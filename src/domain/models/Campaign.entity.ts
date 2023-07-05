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

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => Branch)
  branch: Branch;

  @OneToMany(() => Purchase, (purchase) => purchase.campaign)
  purchases: Purchase[];
}
