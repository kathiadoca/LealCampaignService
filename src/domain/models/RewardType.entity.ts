import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Reward } from './Reward.entity';

@Entity()
export class RewardType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Reward, (reward) => reward.rewardType)
  rewards: Reward;
}
