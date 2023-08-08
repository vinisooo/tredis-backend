import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { PostsService } from "../posts.service";


@Injectable()
export class PostOwnerGuard implements CanActivate {
    constructor(private postsService: PostsService) {}

    async canActivate(context: ExecutionContext) {
        try{
            const request = context.switchToHttp().getRequest();
    
            const post = await this.postsService.findOne(+request.params.id);
            const userId = +request.user.id;
    
            return post.user.id === userId;

        }catch(err){
            return false
        }
    }

}