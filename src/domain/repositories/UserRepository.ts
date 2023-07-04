import { User } from '../models/User.entity';

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  create(user: User): Promise<User>;
  update(user: number, userData: User): Promise<User>;
  delete(id: number): Promise<void>;
}
