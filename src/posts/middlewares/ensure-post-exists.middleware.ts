import { NestMiddleware, NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class EnsurePostExistsMiddleware implements NestMiddleware {

    constructor(private prisma: PrismaService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const postId = +req.params.id;
        
        const post = await this.prisma.post.findUnique({where: {id: postId}});
        
        if(!post){
            throw new NotFoundException("Post not found")
        }

        next();
    }
}
