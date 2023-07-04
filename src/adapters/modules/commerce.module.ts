import { Module } from '@nestjs/common';
import { DatabasesModule } from './database.module';
import { CommerceController } from 'src/infrastructure/controllers/CommerceController';
import { CommerceService } from 'src/application/services/CommerService';
@Module({
  imports: [DatabasesModule],
  controllers: [CommerceController],
  providers: [CommerceService],
  exports: [CommerceService],
})
export class CommerceModule {}
