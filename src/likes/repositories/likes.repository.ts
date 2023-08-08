import { CreateLikeDto } from "../dto/create-like.dto";
import { Like } from "../entities/like.entity";

export abstract class LikeRepository {
    abstract likeOrUnlike(CreateLikeDto: CreateLikeDto, id: number, userId: number): Like | Promise<Like>;
}
