import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }
  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id })
  }
  findUserByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email: ILike(email) })
  }
}
