import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reward } from './Reward.entity';
import { Purchase } from './Purchase.entity';

@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Reward, (reward) => reward.user)
  rewards: Reward[];

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];
}
