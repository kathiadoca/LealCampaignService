import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/User.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneById(id: string): Promise<User> {
    const cliente = await this.userRepository.findOneBy({ id });
    if (cliente) return cliente;
    throw new NotFoundException(`id "${id} does not exist in database`);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: User): Promise<User> {
    let userToUpdate = await this.findOneById(id);
    userToUpdate = { ...userToUpdate, ...user, id };
    return await this.userRepository.save(userToUpdate);
  }

  async delete(id: string): Promise<User> {
    const userToDelete = await this.findOneById(id);
    return await this.userRepository.remove(userToDelete);
  }
}
