import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from '../../../domain/models/Campaign.entity';
import { CampaignRepository } from '../../../domain/repositories/CampaignRepository';

@Injectable()
export class CampaignRepositoryImpl implements CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>,
  ) {}

  async findById(id: any): Promise<Campaign | undefined> {
    return await this.campaignRepository.findOne(id);
  }

  async findAll(): Promise<Campaign[]> {
    return await this.campaignRepository.find();
  }

  async create(campaign: Campaign): Promise<Campaign> {
    return await this.campaignRepository.save(campaign);
  }

  async update(campaign: Campaign): Promise<Campaign> {
    return await this.campaignRepository.save(campaign);
  }

  async delete(id: number): Promise<void> {
    await this.campaignRepository.delete(id);
  }
}
