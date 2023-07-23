import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UserRepository } from "../user.repository";
import { plainToInstance } from "class-transformer";
import { User } from "src/users/entities/user.entity";
import { PrismaService } from "src/database/prisma.service";

export class PrismaUserRepository implements UserRepository {
    
    constructor(private prisma: PrismaService) {}
    
    async create(data: CreateUserDto) {
        const user = await this.prisma.user.create({data});
        return plainToInstance(User, user);
    }

    async findByEmail(email: string): Promise<User>{
        const user = await this.prisma.user.findUnique({
            where: {email}
        });
        return user;
    }
}