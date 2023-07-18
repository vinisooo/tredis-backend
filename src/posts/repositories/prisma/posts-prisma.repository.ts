import { Injectable } from "@nestjs/common";
import { PostRepository } from "../posts.repository";
import { CreatePostDto } from "src/posts/dto/create-post.dto";
import { prisma } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { Post } from "src/posts/entities/post.entity";

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
}
