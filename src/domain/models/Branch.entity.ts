import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Commerce } from './Commerce.entity';

@Entity('branch', { schema: 'public' })
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Commerce, (commerce) => commerce.branches)
  commerce: Commerce;
}
