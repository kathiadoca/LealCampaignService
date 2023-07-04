import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseRepository } from '../../../domain/repositories/PurchaseRepository';
import { Purchase } from '../../../domain/models/Purchase.entity';

@Injectable()
export class PurchaseRepositoryImpl implements PurchaseRepository {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
  ) {}

  async findById(id: any): Promise<Purchase | undefined> {
    return await this.purchaseRepository.findOne(id);
  }

  async findAll(): Promise<Purchase[]> {
    return await this.purchaseRepository.find();
  }

  async create(purchase: Purchase): Promise<Purchase> {
    return await this.purchaseRepository.save(purchase);
  }

  async update(purchase: Purchase): Promise<Purchase> {
    return await this.purchaseRepository.save(purchase);
  }

  async delete(id: number): Promise<void> {
    await this.purchaseRepository.delete(id);
  }
}
