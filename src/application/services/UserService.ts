import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/models/User.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: User): Promise<User> {
    console.log('entro');
    return this.userRepository.create(userData);
  }

  /* async updateUser(userId: number, userData: User): Promise<User | null> {
    return this.userRepository.update(userId, userData);
  }

  async deleteUser(userId: number): Promise<any> {
    return this.userRepository.delete(userId);
  }

  async getUserById(userId: number): Promise<User | null> {
    return this.userRepository.findById(userId);
  } */

  async getUsers(): Promise<User[]> {
    const responseUsers = await this.userRepository.findAll();
    console.log('--->', responseUsers);
    return responseUsers;
  }
}
