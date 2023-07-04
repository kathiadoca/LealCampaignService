import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './share/domain/resources/env.config';
import { GlobalModule } from './share/domain/config/global.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignRepositoryImpl } from './infrastructure/database/repositories/CampaignRepositoryImpl';
import { UserRepositoryImpl } from './infrastructure/database/repositories/UserRepositoryImpl';
import { PurchaseRepositoryImpl } from './infrastructure/database/repositories/PurchaseRepositoryImpl';
import { RewardRepositoryImpl } from './infrastructure/database/repositories/RewardRepositoryImpl';
import { UserModule } from './adapters/modules/user.module';
import { UserService } from './application/services/UserService';
import { User } from './domain/models/User.entity';
import configDb from './infrastructure/config/database.config';

/**
 *  @description clase anotada con un decorador @Module(). El decorador @Module() proporciona
 *  metadatos que Nest utiliza para organizar la estructura de la aplicación.
 *
 *  @author Fabrica Digital
 *
 */
@Module({
  providers: [Logger],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GlobalModule,
    TypeOrmModule.forRoot(configDb),
    UserModule,
  ],
})
export class AppModule {}
