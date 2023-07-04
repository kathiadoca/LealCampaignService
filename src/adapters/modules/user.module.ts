import { Module } from '@nestjs/common';
import { UserService } from '../../application/services/UserService';
import { GetUsersController } from '../../infrastructure/controllers/UserController';
import { DatabasesModule } from './database.module';
@Module({
  imports: [DatabasesModule],
  controllers: [GetUsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
