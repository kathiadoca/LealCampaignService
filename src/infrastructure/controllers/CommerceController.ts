import {
  Body,
  Controller,
  Inject,
  Logger,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ApmInterceptor } from '../../share/domain/config/apm.interceptor';
import { SERVICE_PREFIX } from 'src/share/domain/resources/constants';
import { CommerceService } from 'src/application/services/CommerService';
import { Commerce } from 'src/domain/models/Commerce.entity';

/**
 *  @description Archivo controlador responsable de manejar las solicitudes entrantes que llegan a un end point.
 *  En este caso seran posible acceder por medio de metodos http
 *
 *  @author Luis Torres
 *
 */
@ApiTags('Commerce')
@Controller('Commerce')
@UseInterceptors(ApmInterceptor)
export class CommerceController {
  private readonly logger = new Logger(CommerceController.name);
  @Inject('TransactionId') private readonly transactionId: string;

  constructor(private readonly commerceService: CommerceService) {}

  /* @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Get('getusers')
  async getUsers(@Res() res: Response): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.commerceService.getUsers();
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
  } */

  @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Post('createCommerce')
  async createUsers(
    @Res() res: Response,
    @Body() body: Commerce,
  ): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.commerceService.createCommerce(body);
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
