import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../../application/services/UserService';
import { GetUsersController } from '../../infrastructure/controllers/UserController';
import { User } from '../../domain/models/User.entity';
import { UserRepositoryImpl } from '../../infrastructure/database/repositories/UserRepositoryImpl';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    /* ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GlobalModule, */
  ],
  controllers: [GetUsersController],
  providers: [
    UserService,
    {
      provide: UserRepositoryImpl,
      useValue: 'UserRepository',
    },
  ],
})
export class UserModule {}
