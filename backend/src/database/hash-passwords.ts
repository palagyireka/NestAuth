import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MockPasswordHasher {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async hashPasswords(): Promise<void> {
    const users = await this.usersRepository.find();

    for (const user of users) {
      const password = user.password ?? `randomPassword${user.id}`;
      const hashedPassword = await bcrypt.hash(password, 10);

      await this.usersRepository.update(user.id, {
        password: password,
        password_secret: hashedPassword,
      });
    }
  }
}
