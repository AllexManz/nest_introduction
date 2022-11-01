import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'user@gmail.com', description: "User's email"})
    @IsString({message: "Must be string value"})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;

    @IsString({message: "Must be string value"})
    @ApiProperty({example: 'qwerty', description: "User's password"})
    @Length(4, 16, {message: "Password length must be greater than 4 and lesser than 16"})
    readonly password: string;
}