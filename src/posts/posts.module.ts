import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostRepository } from './repositories/posts.repository';
import { PrismaPostRepository } from './repositories/prisma/posts-prisma.repository';

@Module({
  controllers: [PostsController],
  providers: [
    PostsService,
    {
      provide: PostRepository,
      useClass: PrismaPostRepository
    }
  ]
})
export class PostsModule {}
