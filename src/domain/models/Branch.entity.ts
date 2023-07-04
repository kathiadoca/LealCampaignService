import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Commerce } from './Commerce.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('branch', { schema: 'public' })
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @ManyToOne(() => Commerce, (commerce) => commerce.id)
  @ApiProperty()
  idCommerce: number;
}
