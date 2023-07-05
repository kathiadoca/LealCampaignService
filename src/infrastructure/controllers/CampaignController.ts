import {
  Body,
  Controller,
  Inject,
  Logger,
  Patch,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ApmInterceptor } from '../../share/domain/config/apm.interceptor';
import { SERVICE_PREFIX } from 'src/share/domain/resources/constants';
import { CampaignService } from 'src/application/services/CampaignService';
import { Campaign } from 'src/domain/models/Campaign.entity';

/**
 *  @description Archivo controlador responsable de manejar las solicitudes entrantes que llegan a un end point.
 *  En este caso seran posible acceder por medio de metodos http
 *
 *  @author Luis Torres
 *
 */
@ApiTags('Campaign')
@Controller('campaign')
@UseInterceptors(ApmInterceptor)
export class CampaignController {
  private readonly logger = new Logger(CampaignController.name);
  @Inject('TransactionId') private readonly transactionId: string;

  constructor(private readonly campaignService: CampaignService) {}

  @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Post('createCampaign')
  async createCampaign(
    @Res() res: Response,
    @Body() body: Campaign,
  ): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.campaignService.createCampaign(body);
      res.status(200).json({});
    } finally {
      this.logger.log(
        `Consumo del servicio ${SERVICE_PREFIX}/NewContract finalizado`,
        {
          //totalProcessTime: processTime.end(),
          transactionId: this.transactionId,
        },
      );
    }
  }

  @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Patch('updateBranch')
  async createUsers(
    @Res() res: Response,
    @Body() body: Campaign,
  ): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.campaignService.updateCampaign(body);
      res.status(200).json({});
    } finally {
      this.logger.log(
        `Consumo del servicio ${SERVICE_PREFIX}/NewContract finalizado`,
        {
          //totalProcessTime: processTime.end(),
          transactionId: this.transactionId,
        },
      );
    }
  }
}
