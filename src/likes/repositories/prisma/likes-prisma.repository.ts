import { Injectable } from "@nestjs/common";
import { LikeRepository } from "../likes.repository";
import { CreateLikeDto } from "src/likes/dto/create-like.dto";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaLikeRepository implements LikeRepository {
    constructor(private prisma: PrismaClient) {}

    async likeOrUnlike(CreateLikeDto: CreateLikeDto, id: number, userId: number) {
        const likedOrUnliked = await this.prisma.like.findFirst({
            where: {
                postId: id,
                userId: userId
            }
        })
        if(likedOrUnliked){
            await this.prisma.like.delete({
                where: {
                    id: likedOrUnliked.id
                }
            })
            return {
                details: "Like was removed from the post"
            }
        }

        const liked = await this.prisma.like.create({
            data: {
                postId: id,
                userId: userId,
            },
            include: {
                user: true,
                post: true
            }
        });

        liked.user.password = null;

        return liked
    }
}
