import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract create(data: CreateUserDto): Promise<User> | User;
    abstract findByEmail(email: string): Promise<User> | User;
}
