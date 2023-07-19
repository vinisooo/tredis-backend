import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/posts.repository';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}
  
  create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return post;
  }

  findAll() {
    const posts = this.postRepository.findAll();
    return posts
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if(!post){
      throw new NotFoundException("Post not found!");
    }
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
