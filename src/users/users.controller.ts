import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model"
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuards} from "../auth/role-guards";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @ApiOperation({summary: "User Creation"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: "Receiving information about all users"})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(RolesGuards)
    @Roles("ADMIN")
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }
}
