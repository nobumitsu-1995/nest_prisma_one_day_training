import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // モジュールをグローバルにして、どこからでもPrismaServiceを注入できるようにする
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
