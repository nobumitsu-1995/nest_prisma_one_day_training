// src/users/users.service.ts
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(IUsersRepository)
    private readonly usersRepository: IUsersRepository,
  ) {}

  findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  create(data: { name?: string; email: string }) {
    return this.usersRepository.create(data);
  }

  update(id: number, data: { name?: string; email?: string }) {
    return this.usersRepository.update(id, data);
  }

  remove(id: number) {
    return this.usersRepository.remove(id);
  }
}
