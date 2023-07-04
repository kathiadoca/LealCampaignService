import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RewardType } from './RewardType.entity';
import { User } from './User.entity';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => RewardType, (rewardType) => rewardType.rewards)
  rewardType: RewardType;

  @ManyToOne(() => User, (user) => user.rewards)
  user: User;
}
