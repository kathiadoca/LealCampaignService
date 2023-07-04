import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Commerce } from '../models/Commerce.entity';

@Injectable()
export class CommerceRepository {
  constructor(
    @InjectRepository(Commerce)
    private readonly commerRepository: Repository<Commerce>,
  ) {}

  async create(commerce: Commerce): Promise<Commerce> {
    return await this.commerRepository.save(commerce);
  }
}
