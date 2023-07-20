import { Injectable } from '@nestjs/common';
import {compare} from "bcryptjs";
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(userEmail: string, userPassword: string){
        const user = await this.usersService.findByEmail(userEmail);
        if(user){
            const passwordMatches = await compare(userPassword, user.password);
            if(passwordMatches){
                return {email: user.email};
            }
        }
        return null;
    }

    async login(email: string) {
        const user = await this.usersService.findByEmail(email);
        const token = await this.jwtService.sign({ email }, { subject: user.id.toString() })
        return {token};
    }
}
