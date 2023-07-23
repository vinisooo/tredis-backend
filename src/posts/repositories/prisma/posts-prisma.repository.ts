import { Injectable } from "@nestjs/common";
import { PostRepository } from "../posts.repository";
import { CreatePostDto } from "src/posts/dto/create-post.dto";
import { plainToInstance } from "class-transformer";
import { Post } from "src/posts/entities/post.entity";
import { UpdatePostDto } from "src/posts/dto/update-post.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PrismaPostRepository extends PostRepository{

    constructor(private prisma: PrismaService) {super()}
    
    async create(data: CreatePostDto, userId: number){
        const post = await this.prisma.post.create({
            data: {
                ...data,
                userId
            },
            include: {
                user: true
            }
        })
        
        post.user.password = undefined;
        return plainToInstance(Post, post)
    }

    async findAll() {
        const posts = await this.prisma.post.findMany({
            include: {
                user: true
            }
        });

        posts.forEach((post) => {
            post.user.password = undefined;
        })
        return plainToInstance(Post, posts)
    }

    async findOne(id: number) {
        const post = await this.prisma.post.findUnique({
            where: {id},
            include: {
                user: true
            }
        });
        
        post.user.password = undefined;
        return plainToInstance(Post,post);
    }

    async update(id: number, data: UpdatePostDto) {
        const post = await this.prisma.post.update({
            where: {id},
            data,
            include: {
                user: true
            }
        });

        post.user.password = undefined;
        return plainToInstance(Post,post)
    }

    async remove(id: number) {
        await this.prisma.post.delete({where: {id}});
    }
}
