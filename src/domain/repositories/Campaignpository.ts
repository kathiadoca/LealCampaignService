import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from '../models/Campaign.entity';

@Injectable()
export class CampaignRepository {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async create(campaign: Campaign): Promise<Campaign> {
    return await this.campaignRepository.save(campaign);
  }

  async update(campaign: Campaign): Promise<Campaign> {
    let campaignToUpdate = await this.campaignRepository.findOne({
      where: { id: campaign.id },
    });
    console.log('--->', campaign);
    campaignToUpdate = { ...campaignToUpdate, ...campaign };
    return await this.campaignRepository.save(campaignToUpdate);
  }
}
