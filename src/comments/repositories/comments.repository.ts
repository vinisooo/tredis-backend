import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from './../dto/create-comment.dto';

export abstract class CommentRepository {
    abstract create(CreateCommentDto: CreateCommentDto, postId: number, userId: number): Comment | Promise<Comment>;
}
