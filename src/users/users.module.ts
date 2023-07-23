import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/user-prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  exports: [UsersService],
  controllers: [UsersController],
  providers: [
    PrismaService,
    UsersService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ]
})
export class UsersModule {}
