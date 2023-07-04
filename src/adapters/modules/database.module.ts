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
import { BranchRepository } from 'src/domain/repositories/BranchRepository';
import { Branch } from 'src/domain/models/Branch.entity';

// Repositories
//import { UserRepository, UserTransactionRepository } from './repositories';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: MysqlConfig }),
    TypeOrmModule.forFeature([User, Commerce, Branch]),
  ],
  providers: [UserRepository, CommerceRepository, BranchRepository],
  exports: [
    TypeOrmModule,
    UserRepository,
    CommerceRepository,
    BranchRepository,
  ],
})
export class DatabasesModule {}
