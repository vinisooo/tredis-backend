import { Exclude } from "class-transformer";

export class User {
    readonly id: number;
    email: string;
    description: string;

    @Exclude()
    password: string;
    
}
