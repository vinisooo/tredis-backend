import { Injectable } from "@nestjs/common";
import { PostRepository } from "../posts.repository";
import { CreatePostDto } from "src/posts/dto/create-post.dto";
import { prisma } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { Post } from "src/posts/entities/post.entity";
import { UpdatePostDto } from "src/posts/dto/update-post.dto";

@Injectable()
export class PrismaPostRepository extends PostRepository{
    
    async create(data: CreatePostDto){
        const post = await prisma.post.create({
            data
        })
        
        return plainToInstance(Post, post)
    }
    async findAll() {
        const posts = await prisma.post.findMany();

        return plainToInstance(Post, posts)
    }
    async findOne(id: number) {
        const post = await prisma.post.findUnique({where: {id}});
        return post
    }
    async update(id: number, data: UpdatePostDto) {
        const post = await prisma.post.update({where: {id}, data});
        return post;
    }
}
