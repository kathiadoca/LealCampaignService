import { User } from '../../domain/models/User.entity';

export interface UserServiceInterface {
  createUser(userData: Partial<User>): Promise<User>;
  updateUser(userId: number, userData: Partial<User>): Promise<User | null>;
  deleteUser(userId: number): Promise<boolean>;
  getUserById(userId: number): Promise<User | null>;
  getUsers(): Promise<User[]>;
}
