import { Purchase } from '../models/Purchase.entity';

export interface PurchaseRepository {
  findById(id: number): Promise<Purchase | null>;
  findAll(): Promise<Purchase[]>;
  create(purchase: Purchase): Promise<Purchase>;
  update(purchase: Purchase): Promise<Purchase>;
  delete(id: number): Promise<void>;
}
