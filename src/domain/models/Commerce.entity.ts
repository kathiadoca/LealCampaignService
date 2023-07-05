import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Branch } from './Branch.entity';
import { Campaign } from './Campaign.entity';

@Entity('commerce', { schema: 'public' })
export class Commerce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @OneToMany(() => Branch, (branch) => branch.commerce)
  branches: Branch[];

  @OneToMany(() => Campaign, (campaign) => campaign.commerce)
  campaigns: Campaign[];
}
