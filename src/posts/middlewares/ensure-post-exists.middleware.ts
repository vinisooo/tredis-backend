import { NestMiddleware, NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { prisma } from "src/database/prisma.service";


@Injectable()
export class EnsurePostExistsMiddleware implements NestMiddleware {

    async use(req: Request, res: Response, next: NextFunction) {
        const postId = +req.params.id;
        
        const post = await prisma.post.findUnique({where: {id: postId}});
        
        if(!post){
            throw new NotFoundException("Post not found")
        }

        next();
    }
}
