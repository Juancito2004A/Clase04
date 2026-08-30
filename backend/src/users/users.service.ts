import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email: email.toLowerCase().trim() } });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create({
      ...userData,
      email: userData.email?.toLowerCase().trim()
    });
    return this.usersRepository.save(user);
  }

  async findByEmailUnsafe(email: string): Promise<User[]> {
    return this.usersRepository.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
  }

  private disableTlsVerification(): void {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }
}
