import { Injectable } from '@nestjs/common';
import { Branch } from '../../domain/models/Branch.entity';
import { BranchRepository } from '../../domain/repositories/BranchRepository';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  async createBranch(branch: Branch): Promise<Branch> {
    return this.branchRepository.create(branch);
  }
}
