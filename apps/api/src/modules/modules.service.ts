import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException } from '@nestjs/common';

@Injectable()
export class ModulesService {
    constructor(private prisma: PrismaService) {}

    getModules() {
        return this.prisma.module.findMany({});
    }

    getModuleById(id: string) {
        return this.prisma.module.findUnique({ where: {id: id}});
    }

    createModule(moduleData: { title: string; content: string; courseId: string }) {
        return this.prisma.module.create({ data: moduleData });
    }

    async updateModuleById(id: string, moduleData: { title?: string; description?: string; courseId?: string }) {
        const findModule = await this.getModuleById(id);
        if(!findModule){
            throw new HttpException('Module not Found', 404);
        }
        return this.prisma.module.update({where: {id : id}, data: moduleData});
    }

    async deleteModuleById(id: string) {
        const findModule = await this.getModuleById(id);
        if(!findModule){
            throw new HttpException('Module not Found', 404);
        }
        return this.prisma.module.delete({where: {id : id}});
    }
}
