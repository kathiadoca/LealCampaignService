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
import { SERVICE_PREFIX } from '../../share/domain/resources/constants';
import { BranchService } from '../../application/services/BranchService';
import { Branch } from '../../domain/models/Branch.entity';

/**
 *  @description Archivo controlador responsable de manejar las solicitudes entrantes que llegan a un end point.
 *  En este caso seran posible acceder por medio de metodos http
 *
 *  @author Luis Torres
 *
 */
@ApiTags('Branch')
@Controller('branch')
@UseInterceptors(ApmInterceptor)
export class BranchController {
  private readonly logger = new Logger(BranchController.name);
  @Inject('TransactionId') private readonly transactionId: string;

  constructor(private readonly branchService: BranchService) {}

  @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Post('createBranch')
  async getUsers(@Res() res: Response, @Body() body: Branch): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.branchService.createBranch(body);
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
