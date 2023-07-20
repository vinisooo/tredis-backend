import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import {hashSync} from "bcryptjs";

export class CreateUserDto {
    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(255)
    @Transform(({value}: {value: string}) => hashSync(value), {
        groups: ["transform"]
    })
    password: string;
}
