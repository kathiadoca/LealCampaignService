import { Injectable, Inject } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject(Connection) private connection: Connection) {}

  getConnection(): Connection {
    return this.connection;
  }

  async closeConnection(): Promise<void> {
    await this.connection.close();
  }
}
