import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UserRepository } from "../user.repository";
import { prisma } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { User } from "src/users/entities/user.entity";

export class PrismaUserRepository implements UserRepository {
    
    async create(data: CreateUserDto) {
        const user = await prisma.user.create({data});
        return plainToInstance(User, user);
    }
}
