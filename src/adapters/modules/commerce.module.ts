import { Module } from '@nestjs/common';
import { DatabasesModule } from './database.module';
import { CommerceController } from '../../infrastructure/controllers/CommerceController';
import { CommerceService } from '../../application/services/CommerService';
@Module({
  imports: [DatabasesModule],
  controllers: [CommerceController],
  providers: [CommerceService],
  exports: [CommerceService],
})
export class CommerceModule {}
