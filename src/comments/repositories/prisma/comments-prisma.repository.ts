import { Injectable } from '@nestjs/common';
import { CommentRepository } from "../comments.repository";
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
    constructor(private prisma: PrismaClient) {}

    async create(data: CreateCommentDto, postId: number, userId: number){
        const comment = this.prisma.comment.create({
            data: {
                ...data,
                postId,
                userId
            }
        });

        return comment
    }
}
