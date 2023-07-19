import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Post } from "../entities/post.entity";

export abstract class PostRepository {
    abstract create(data: CreateUserDto): Promise<Post> | Post;  
    abstract findAll(): Promise<Post[]> | Post;
    abstract findOne(id: number): Promise<Post> | Post;
}
