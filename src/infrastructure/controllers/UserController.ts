import {
  Body,
  Controller,
  Inject,
  Logger,
  Get,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ApmInterceptor } from '../../share/domain/config/apm.interceptor';
import { SERVICE_PREFIX } from 'src/share/domain/resources/constants';
import { UserService } from 'src/application/services/UserService';

/**
 *  @description Archivo controlador responsable de manejar las solicitudes entrantes que llegan a un end point.
 *  En este caso seran posible acceder por medio de metodos http
 *
 *  @author Luis Torres
 *
 */
@ApiTags('GetUsers')
@Controller('getUsers')
@UseInterceptors(ApmInterceptor)
export class GetUsersController {
  private readonly logger = new Logger(GetUsersController.name);
  @Inject('TransactionId') private readonly transactionId: string;

  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    //type: ApiResponseDto,
    status: 200,
  })
  @Get()
  async getUsers(@Res() res: Response): Promise<void> {
    //const processTime = this.processTimeService.start();
    try {
      this.logger.log('Controller request message', {
        transactionId: this.transactionId,
      });
      const serviceResponse = await this.userService.getUsers();
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
