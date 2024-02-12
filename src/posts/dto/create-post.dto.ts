import { IsString, MaxLength, MinLength } from "class-validator";

export class CreatePostDto {

    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(5)
    desciption: string;
}
