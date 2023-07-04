// Libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configurations
import { MysqlConfig } from 'src/infrastructure/config/mysql.config';

// Entities
import { User } from 'src/domain/models/User.entity';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { Commerce } from 'src/domain/models/Commerce.entity';
import { CommerceRepository } from 'src/domain/repositories/CommerceRepository';

// Repositories
//import { UserRepository, UserTransactionRepository } from './repositories';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: MysqlConfig }),
    TypeOrmModule.forFeature([User, Commerce]),
  ],
  providers: [UserRepository, CommerceRepository],
  exports: [TypeOrmModule, UserRepository, CommerceRepository],
})
export class DatabasesModule {}
