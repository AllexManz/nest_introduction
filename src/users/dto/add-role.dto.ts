import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @IsString({message: "Must be string value"})
    readonly value: string;
    @IsNumber({}, {message: "Must be a number"})
    readonly userId: number;

}