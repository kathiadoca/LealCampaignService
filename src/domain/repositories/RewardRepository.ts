import { Reward } from '../models/Reward.entity';

export interface RewardRepository {
  findById(id: number): Promise<Reward | null>;
  findAll(): Promise<Reward[]>;
  create(reward: Reward): Promise<Reward>;
  update(reward: Reward): Promise<Reward>;
  delete(id: number): Promise<void>;
}
