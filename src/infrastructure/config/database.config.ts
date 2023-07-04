import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const configDb: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'leal_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Solo utilizar en desarrollo
};

export default configDb;
