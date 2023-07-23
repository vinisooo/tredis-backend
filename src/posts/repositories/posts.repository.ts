import { Post } from "../entities/post.entity";
import { UpdatePostDto } from "../dto/update-post.dto";
import { CreatePostDto } from "../dto/create-post.dto";

export abstract class PostRepository {
    abstract create(data: CreatePostDto, userId: number): Promise<Post> | Post;  
    abstract findAll(): Promise<Post[]> | Post;
    abstract findOne(id: number): Promise<Post> | Post;
    abstract update(id: number, data: UpdatePostDto): Promise<Post>| Post;
    abstract remove(id: number): Promise<void> | void;
}
