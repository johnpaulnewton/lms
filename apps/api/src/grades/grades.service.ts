import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GradeCreateIn, GradeUpdateIn } from '@repo/api/grades';
import { Grade } from '../../../../packages/database/generated/client';

@Injectable()
export class GradesService {
    constructor(private prisma: PrismaService) {};

    getGrades() {
        return this.prisma.grade.findMany();
    }
    
    getGradeById(id: string) {
        return this.prisma.grade.findUnique({ where: {id: id}});
    }

    createGrade(gradeData: GradeCreateIn) {
        return this.prisma.grade.create({ data: gradeData });
    }
    
    async updateGradeById(id: string, gradeData: GradeUpdateIn) {
        const findGrade = await this.getGradeById(id);
        if(!findGrade){
            throw new Error('Grade not Found');
        }
        return this.prisma.grade.update({where: {id : id}, data: gradeData});
    }

    async deleteGradeById(id: string) {
        const findGrade = await this.getGradeById(id);
        if(!findGrade){
            throw new Error('Grade not Found');
        }
        return this.prisma.grade.delete({where: {id : id}});
    }
}
