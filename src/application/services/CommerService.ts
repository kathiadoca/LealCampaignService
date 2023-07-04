import { Injectable } from '@nestjs/common';
import { Commerce } from 'src/domain/models/Commerce.entity';
import { CommerceRepository } from 'src/domain/repositories/CommerceRepository';

@Injectable()
export class CommerceService {
  constructor(private readonly commerceRepository: CommerceRepository) {}

  async createCommerce(commerce: Commerce): Promise<Commerce> {
    console.log('entro');
    return this.commerceRepository.create(commerce);
  }
}
