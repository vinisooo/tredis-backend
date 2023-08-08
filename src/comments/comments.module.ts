import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentRepository } from './repositories/comments.repository';
import { PrismaCommentRepository } from './repositories/prisma/comments-prisma.repository';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaClient,
    {
      provide: CommentRepository,
      useClass: PrismaCommentRepository
    }
  ]
})
export class CommentsModule {}
