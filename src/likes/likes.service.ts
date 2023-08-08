import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeRepository } from './repositories/likes.repository';

@Injectable()
export class LikesService {
  constructor(private likeRepository: LikeRepository) {}

  likeOrUnlike(createLikeDto: CreateLikeDto, id: number, userId: number) {
    return this.likeRepository.likeOrUnlike(createLikeDto, id, userId);
  }
}
