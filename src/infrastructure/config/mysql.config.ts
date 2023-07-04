// Libraries
import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import config from '../../share/domain/resources/env.config';

// Entities
import { User } from 'src/domain/models/User.entity';
import { ConfigType } from '@nestjs/config';
import { Campaign } from 'src/domain/models/Campaign.entity';
import { Purchase } from 'src/domain/models/Purchase.entity';
import { Reward } from 'src/domain/models/Reward.entity';
import { RewardType } from 'src/domain/models/RewardType.entity';
import { Commerce } from 'src/domain/models/Commerce.entity';
import { Branch } from 'src/domain/models/Branch.entity';

@Injectable()
export class MysqlConfig implements TypeOrmOptionsFactory {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.database.dbhost,
      port: parseInt(this.configService.database.dbport),
      username: this.configService.database.username,
      password: this.configService.database.password,
      database: this.configService.database.dbdatabase,
      synchronize: true,
      entities: [
        User,
        RewardType,
        Reward,
        Purchase,
        Campaign,
        Commerce,
        Branch,
      ],
    };
  }
}
