import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}
  
  async create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return post;
  }

  async findAll() {
    const posts = this.postRepository.findAll();
    return posts
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne(id);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.update(id, updatePostDto);
    return post;
  }

  async remove(id: number) {
    await this.postRepository.remove(id);
  }
}
