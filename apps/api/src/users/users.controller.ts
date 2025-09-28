import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { UsersService } from './users.service'
import { CreateUserDto } from './create-user.dto'
import { UpdateUserDto } from './update-user.dto'

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
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    
    @Patch(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usersService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string){
        return this.usersService.deleteUserById(id);
    }
}
