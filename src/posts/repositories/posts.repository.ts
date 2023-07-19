import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Post } from "../entities/post.entity";
import { UpdatePostDto } from "../dto/update-post.dto";

export abstract class PostRepository {
    abstract create(data: CreateUserDto): Promise<Post> | Post;  
    abstract findAll(): Promise<Post[]> | Post;
    abstract findOne(id: number): Promise<Post> | Post;
    abstract update(id: number, data: UpdatePostDto): Promise<Post>| Post;
    abstract remove(id: number): Promise<void> | void;
}
