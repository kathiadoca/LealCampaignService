import { Campaign } from '../models/Campaign.entity';

export interface CampaignRepository {
  findById(id: number): Promise<Campaign | null>;
  findAll(): Promise<Campaign[]>;
  create(campaign: Campaign): Promise<Campaign>;
  update(campaign: Campaign): Promise<Campaign>;
  delete(id: number): Promise<void>;
}
