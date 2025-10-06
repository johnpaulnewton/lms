import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
    constructor(private prisma: PrismaService) {}

    getEnrollments() {
        return this.prisma.enrollment.findMany({});
    }
    
    getEnrollmentById(id: string) {
        return this.prisma.enrollment.findUnique({ where: {id: id}});
    }   

    createEnrollment(enrollmentData: { term: string; userId: string; courseId: string }) {
        return this.prisma.enrollment.create({ data: enrollmentData });
    }

    async updateEnrollmentById(id: string, enrollmentData: { term?: string; userId?: string; courseId?: string }) {
        const findEnrollment = await this.getEnrollmentById(id);
        if(!findEnrollment){
            throw new Error('Enrollment not Found');
        }
        return this.prisma.enrollment.update({where: {id : id}, data: enrollmentData});
    }
    
    async deleteEnrollmentById(id: string) {
        const findEnrollment = await this.getEnrollmentById(id);
        if(!findEnrollment){
            throw new Error('Enrollment not Found');
        }
        return this.prisma.enrollment.delete({where: {id : id}});
    }

    async getEnrollmentsByUserId(userId: string) {
        return this.prisma.enrollment.findMany({ where: { userId: userId }});
    }
}
