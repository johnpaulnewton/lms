import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GradesService {
    constructor(private prisma: PrismaService) {};

    getGrades() {
        return this.prisma.grade.findMany();
    }
    
    getGradeById(id: string) {
        return this.prisma.grade.findUnique({ where: {id: id}});
    }

    createGrade(gradeData: { gradeValue: number; feedback: string; gradedDate: Date; submissionId: string; graderId: string }) {
        return this.prisma.grade.create({ data: gradeData });
    }
    
    async updateGradeById(id: string, gradeData: { gradeValue?: number; feedback?: string; gradedDate?: Date; submissionId?: string; graderId?: string }) {
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
