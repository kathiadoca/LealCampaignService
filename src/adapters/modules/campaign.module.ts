import { Module } from '@nestjs/common';
import { DatabasesModule } from './database.module';
import { CampaignController } from '../../infrastructure/controllers/CampaignController';
import { CampaignService } from '../../application/services/CampaignService';
@Module({
  imports: [DatabasesModule],
  controllers: [CampaignController],
  providers: [CampaignService],
  exports: [CampaignService],
})
export class CampaignModule {}
