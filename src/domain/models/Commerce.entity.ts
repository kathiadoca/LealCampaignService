import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Branch } from './Branch.entity';

@Entity('commerce', { schema: 'public' })
export class Commerce {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Branch, (branch) => branch.commerce)
  branches: Branch[];
}
