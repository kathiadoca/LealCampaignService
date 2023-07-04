import { Injectable } from '@nestjs/common';
import { Commerce } from '../../domain/models/Commerce.entity';
import { CommerceRepository } from '../../domain/repositories/CommerceRepository';

@Injectable()
export class CommerceService {
  constructor(private readonly commerceRepository: CommerceRepository) {}

  async createCommerce(commerce: Commerce): Promise<Commerce> {
    return this.commerceRepository.create(commerce);
  }
}
