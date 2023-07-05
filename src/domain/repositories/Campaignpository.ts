import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from '../models/Campaign.entity';

@Injectable()
export class CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private readonly branchRepository: Repository<Campaign>,
  ) {}

  async create(campaign: Campaign): Promise<Campaign> {
    return await this.branchRepository.save(campaign);
  }
}
