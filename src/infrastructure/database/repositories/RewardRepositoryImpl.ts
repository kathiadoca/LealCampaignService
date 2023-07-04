import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RewardRepository } from 'src/domain/repositories/RewardRepository';
import { Reward } from 'src/domain/models/Reward.entity';

@Injectable()
export class RewardRepositoryImpl implements RewardRepository {
  constructor(
    @InjectRepository(Reward)
    private readonly rewardRepository: Repository<Reward>,
  ) {}
  findAll(): Promise<Reward[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: any): Promise<Reward | undefined> {
    return await this.rewardRepository.findOne(id);
  }

  async create(reward: Reward): Promise<Reward> {
    return await this.rewardRepository.save(reward);
  }

  async update(reward: Reward): Promise<Reward> {
    return await this.rewardRepository.save(reward);
  }

  async delete(id: number): Promise<void> {
    await this.rewardRepository.delete(id);
  }
}
