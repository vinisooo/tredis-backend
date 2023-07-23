import { User } from "src/users/entities/user.entity";

export class Post {
    readonly id: number;
    content: string;
    imageUrl: string | null;

    user: User;
}
