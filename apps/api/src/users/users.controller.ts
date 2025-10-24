import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service'
import { UserCreateIn, UserUpdateIn } from '@repo/api/users';
import { AuthGuard } from '@nestjs/passport';
import { JwtUser } from 'src/auth/jwt.strategy';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async me(@CurrentUser() auth: JwtUser) {
        console.log(auth);
        if (!auth || !auth.userId) {
            throw new UnauthorizedException();
        }
        const user = await this.usersService.getUserById(auth.userId);
        if (!user) {
            throw new Error('User not found');
        }
        // Return only what your client needs (include the DB id!)
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            // optionally roles, picture, etc.
        };
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('me')
    async updateMe(@CurrentUser() auth: JwtUser, @Body() updateUserDto: UserUpdateIn) {
        if (!auth || !auth.userId) {
            throw new UnauthorizedException();
        }
        return this.usersService.updateUserById(auth.userId, updateUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createUser(@Body() createUserDto: UserCreateIn) {
        return this.usersService.createUser(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    updateUserById(@Param('id') id: string, @Body() updateUserDto: UserUpdateIn) {
        return this.usersService.updateUserById(id, updateUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUserById(@Param('id') id: string) {
        return this.usersService.deleteUserById(id);
    }



}


