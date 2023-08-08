import { Controller, Post, Body, UseGuards, Param, Request } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(":id")
  @UseGuards(JwtAuthGuard)
  create(@Body() createLikeDto: CreateLikeDto, @Param("id") id: string, @Request() req) {
    return this.likesService.likeOrUnlike(createLikeDto, +id, +req.user.id);
  }
}
