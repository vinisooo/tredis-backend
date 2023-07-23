import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UserRepository } from "../user.repository";
import { plainToInstance } from "class-transformer";
import { User } from "src/users/entities/user.entity";
import { PrismaService } from "src/database/prisma.service";
import { ConflictException, Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {

    constructor(private prisma: PrismaService) {}
    
    async create(data: CreateUserDto) {
        const foundByEmail = await this.findByEmail(data.email);

        if(foundByEmail) {
            throw new ConflictException("This Email is already registered");
        }

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