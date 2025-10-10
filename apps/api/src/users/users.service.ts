import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService{
    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }
    
    getUserById(id: string) {
        return this.prisma.user.findUnique({ where: {id: id}});
    }

    createUser(userData: { email: string; firstName: string; lastName: string; role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'; passwordHash: string }) {
        return this.prisma.user.create({ data: userData });
    }

    async updateUserById(id: string, userData: { email?: string; firstName?: string; lastName?: string; role?: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN'; passwordHash?: string }) {
        const findUser = await this.getUserById(id);
        if(!findUser){
            throw new HttpException('User not Found', 404);
        }
        return this.prisma.user.update({where: {id : id}, data: userData});
    }

    async deleteUserById(id: string) {
        const findUser = await this.getUserById(id);
        if(!findUser){
            throw new HttpException('User not Found', 404);
        }
        return this.prisma.user.delete({where: {id : id}})
    }
} 
