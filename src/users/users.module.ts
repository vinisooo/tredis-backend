import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/user-prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ]
})
export class UsersModule {}
