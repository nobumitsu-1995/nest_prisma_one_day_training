// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IUsersRepository } from './users.repository.interface';
import { UsersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: IUsersRepository, // 抽象クラス(インターフェース)
      useClass: UsersRepository, // 具体的な実装クラス
    },
  ],
})
export class UsersModule {}
