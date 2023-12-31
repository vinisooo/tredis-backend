import { Module, MiddlewareConsumer } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostRepository } from './repositories/posts.repository';
import { PrismaPostRepository } from './repositories/prisma/posts-prisma.repository';
import { EnsurePostExistsMiddleware } from './middlewares/ensure-post-exists.middleware';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [PostsController],
  providers: [
    PrismaService,
    PostsService,
    {
      provide: PostRepository,
      useClass: PrismaPostRepository
    }
  ]
})
export class PostsModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(
      EnsurePostExistsMiddleware
    ).forRoutes("/posts/:id*")
  }
}
