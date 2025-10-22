import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from './users.service'
import { UserCreateIn, UserUpdateIn } from '@repo/api/users';

@Controller('users') 
export class UsersController {
    constructor(private usersService: UsersService) {}
   
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDto: UserCreateIn) {
        return this.usersService.createUser(createUserDto);
    }
    
    @Patch(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: UserUpdateIn){
        return this.usersService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string){
        return this.usersService.deleteUserById(id);
    }
}
