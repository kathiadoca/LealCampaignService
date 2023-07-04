// Libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configurations
import { MysqConfig } from 'src/infrastructure/config/mysql.config';

// Entities
import { User } from 'src/domain/models/User.entity';
import { UserRepository } from 'src/domain/repositories/UserRepository';

// Repositories
//import { UserRepository, UserTransactionRepository } from './repositories';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: MysqConfig }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserRepository],
  exports: [TypeOrmModule, UserRepository],
})
export class DatabasesModule {}
