import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaClient } from '@prisma/client';
import { LikeRepository } from './repositories/likes.repository';
import { PrismaLikeRepository } from './repositories/prisma/likes-prisma.repository';

@Module({
  controllers: [LikesController],
  providers: [
    LikesService, 
    PrismaClient,
    {
      provide: LikeRepository,
      useClass: PrismaLikeRepository
    }
  ]
})
export class LikesModule {}
