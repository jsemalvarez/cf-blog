import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @MinLength(3)
    user: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    @IsString()
    password: string;
}
