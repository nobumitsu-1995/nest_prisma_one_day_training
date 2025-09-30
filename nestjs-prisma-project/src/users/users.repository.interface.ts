// src/users/users.repository.interface.ts
import { User } from '@prisma/client';

export abstract class IUsersRepository {
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: number): Promise<User | null>;
  abstract create(data: { name?: string; email: string }): Promise<User>;
  abstract update(
    id: number,
    data: { name?: string; email?: string },
  ): Promise<User>;
  abstract remove(id: number): Promise<User>;
}
