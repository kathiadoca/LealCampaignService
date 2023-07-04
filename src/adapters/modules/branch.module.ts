import { Module } from '@nestjs/common';
import { DatabasesModule } from './database.module';
import { BranchController } from '../../infrastructure/controllers/BranchController';
import { BranchService } from '../../application/services/BranchService';
@Module({
  imports: [DatabasesModule],
  controllers: [BranchController],
  providers: [BranchService],
  exports: [BranchService],
})
export class BranchModule {}
