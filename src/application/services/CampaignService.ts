import { Injectable } from '@nestjs/common';
import { Campaign } from '../../domain/models/Campaign.entity';
import { CampaignRepository } from 'src/domain/repositories/Campaignpository';

@Injectable()
export class CampaignService {
  constructor(private readonly campaignRepository: CampaignRepository) {}

  async createCampaign(campaign: Campaign): Promise<Campaign> {
    return this.campaignRepository.create(campaign);
  }
}
